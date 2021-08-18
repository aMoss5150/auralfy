import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { usePlay } from '../../context/PlayContext'
import Field, { config } from './ParticleConfig2'
import './CanvasCC.css'


let ctx, center_x, center_y, radius, x_end, y_end, bar_height;
const width = window.innerWidth;
const height = window.innerHeight;
const bars = 707;
const bar_width = .2;
radius = 0;
center_x = width / 2;
center_y = height / 2;
let rafId
let context
let source
let analyser
let frequency_array

export default function CanvasF() {
    // const songs = useSelector(state => state.songs)
    // const song = songs ? songs[1] : null
    // const link = song?.link
    const { playCtxt, setPlayCtxt, status, setStatus } = usePlay()
    const [state, setState] = useState({
        // audio: new Audio("https://song-storage-5150.s3.amazonaws.com/auralfy-music/01+-+I+Got+The....mp3"),
        audio: playCtxt ? new Audio(playCtxt.link) : null,
        canvas: React.createRef(),
        loading: false,
        position: 0,
        volume: 100,
    });

    // let rafId = requestAnimationFrame(tick);
    useEffect(() => {
        context = new (window.AudioContext || window.webkitAudioContext)()
        if (state.audio) {
            source = context.createMediaElementSource(state.audio)
            analyser = context.createAnalyser()
            source.connect(analyser);
            analyser.connect(context.destination);
            frequency_array = new Uint8Array(analyser.frequencyBinCount * 2);
            state.audio.crossOrigin = "anonymous"
        }
    }, [playCtxt])

    const animationLooper = (canvas) => {
        if (!canvas || !state.audio) return null
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext("2d");
        for (let i = 0; i < bars; i++) {

            //divide a circle into equal part
            // const rads = Math.PI * 2 / bars * 2;

            // Math is magical
            // console.log(frequency_array, analyser);
            // bar_height = frequency_array[i] * 2;
            // const x = center_x + Math.cos(rads * i) * (radius);
            // const y = center_y + Math.sin(rads * i) * (radius);
            // x_end = center_x + Math.cos(rads * i) * (radius + bar_height);
            // y_end = center_y + Math.sin(rads * i) * (radius + bar_height);



            //* practice
            const rads = Math.PI * 2 / bars * 2;
            bar_height = frequency_array[i] * 3;
            // center_x = center_x * Math.random()
            // center_y = center_y * Math.random()
            const x = center_x + Math.cos(rads * i);
            const y = center_y + Math.sin(rads * i);
            // const x = center_x + Math.cos(rads * i) * (radius);
            // const y = center_y + Math.sin(rads * i) * (radius);
            x_end = center_x + Math.cos(rads * i) * (radius + bar_height);
            y_end = center_x + Math.sin(rads * i) * (radius + bar_height);


            //draw a bar
            drawBar(x, y, x_end, y_end, frequency_array[i], ctx, canvas);
        }
    }

    const drawBar = (x1 = 0, y1 = 0, x2 = 0, y2 = 0, frequency, ctx, canvas) => {
        const gradient = ctx.createLinearGradient(20, 0, 200, canvas.height);
        const lineColor = "rgb(" + frequency / 1.2 + ", " + Math.random() * 44 + ", " + Math.random() * 54 + ")";
        // const lineColor = "rgb(" + frequency / 2 + ", " + Math.random() * 10 + ", " + Math.random() * 8 + ")";
        gradient.addColorStop(0, "rgba(220, 54, 54, 1)");
        gradient.addColorStop(1, "rgba(223, 44, 54, 1)");
        ctx.fillStyle = lineColor;



        // ctx.strokeStyle = gradient;
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = bar_width;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    const tick = () => {
        state.audio.volume = 1
        state.audio.play()
        // context.resume()

        animationLooper(state.canvas.current);
        // analyser.getByteTimeDomainData(frequency_array)
        analyser.getByteFrequencyData(frequency_array)
        rafId = requestAnimationFrame(tick);
    }


    return (
        <div id="canvas__field2">
            <button className="fullvis__button1" onClick={() => state.audio ? tick() : null}>start</button>
            {
                playCtxt &&
                <img className="fullvis__image" src={playCtxt.image} alt="artist image" />
            }
            <button className="fullvis__button2" onClick={() => (
                setStatus("STOPPED")
            )}>stop</button>

            <Link id="go-back" to="/">{`<<`}</Link>
            <Field config={config} />
            <canvas className="canvas__skin" ref={state.canvas} />
        </div>
    )
}

