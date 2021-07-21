import React, { useEffect, useState } from 'react'
import { usePlay } from '../../context/PlayContext'


let ctx, center_x, center_y, radius, x_end, y_end, bar_height;
const width = window.innerWidth;
const height = window.innerHeight;
const bars = 555;
const bar_width = 1;
radius = 0;
center_x = width / 2;
center_y = height / 2;

export default function CanvasF() {
    const { playCtxt, setPlayCtxt, status, setStatus } = usePlay()
    const [state, setState] = useState({
        audio: new Audio(playCtxt).crossOrigin = "anonymous",
        canvas: React.createRef(),
        loading: false,
        position: 0,
        volume: 100,
        context: new (window.AudioContext || window.webkitAudioContext)(),
        source: state.context.createMediaElementSource(state.audio),
        analyser: state.context.createAnalyser(),
    });
    state.source.connect(state.analyser);
    state.analyser.connect(state.context.destination);
    let frequency_array = new Uint8Array(state.analyser.frequencyBinCount);
    // let rafId = requestAnimationFrame(tick);


    const animationLooper = (canvas = state.canvas) => {
        if (!canvas) return null
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext("2d");
        for (let i = 0; i < bars; i++) {
            //divide a circle into equal part
            const rads = Math.PI * 2 / bars * 2;

            // Math is magical
            bar_height = frequency_array[i] * 2;
            const x = center_x + Math.cos(rads * i) * (radius);
            const y = center_y + Math.sin(rads * i) * (radius);
            x_end = center_x + Math.cos(rads * i) * (radius + bar_height);
            y_end = center_y + Math.sin(rads * i) * (radius + bar_height);

            //draw a bar
            drawBar(x, y, x_end, y_end, frequency_array[i], ctx, canvas);
        }
    }

    const drawBar = (x1 = 0, y1 = 0, x2 = 0, y2 = 0, frequency, ctx, canvas) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "rgba(161, 184, 166, 1)");
        gradient.addColorStop(1, "rgba(161, 198, 167, 1)");
        ctx.fillStyle = gradient;

        const lineColor = "rgb(" + frequency / 2 + ", " + 184 + ", " + 161 + ")";
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = bar_width;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    const tick = () => {
        animationLooper(canvas.current);
        state.analyser.getByteTimeDomainData(frequency_array);
        rafId = requestAnimationFrame(tick);
    }


    // useEffect(() => {
    //     context = new (window.AudioContext || window.webkitAudioContext)();
    //     source = context.createMediaElementSource(audio);
    //     analyser = context.createAnalyser();
    //     source.connect(analyser);
    //     analyser.connect(context.destination);
    //     frequency_array = new Uint8Array(analyser.frequencyBinCount);
    //     rafId = requestAnimationFrame(tick);

    //     return (() => {
    //         cancelAnimationFrame(rafId);
    //         analyser.disconnect();
    //         source.disconnect();
    //     })
    // }, [])
    return (
        <div>
            <canvas className="canvas__skin" ref={state.canvas} />
        </div>
    )
}

