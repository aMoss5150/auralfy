import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { usePlay } from '../../context/PlayContext'
import { useVisualizer } from '../../context/VisualizerContext'
import Field from './ParticleConfig2'
import './CanvasCC.css'


let ctx, center_x, center_y, radius, x_end, y_end, bar_height;
const bars = 75;
let bar_width = .2;
radius = 0;
//* likely have to keep these vars dynamic assigned within a function instead
let width
let height
width = window.innerWidth;
height = window.innerHeight;

// center_x = width / 2;
// //* height  || height / 2 for placement at bottom of page
// center_y = height / 2;
// center_y = height * 10;

let rafId
let context
let source
let analyser
let frequency_array
let ell = true


//* how to determine frequency based on sample rate and fftSize
//* sample rate should be 48000 and fft 2048
// N * samplerate / fftSize


export default function CanvasF() {
    const { playCtxt, setPlayCtxt, status, setStatus, positionCtxt, setPositionCtxt } = usePlay()
    const { visualizerCtxt, setVisualizerCtxt } = useVisualizer()
    // visualizerCtxt === 1 ? center_y = height / 2 : center_y = height

    bar_width = playCtxt ? playCtxt.energy * 2 : .2
    // const songs = useSelector(state => state.songs)
    // const song = songs ? songs[1] : null
    // const link = song?.link
    const [state, setState] = useState({
        audio: playCtxt ? new Audio(playCtxt.link) : null,
        canvas: React.createRef(),
        loading: false,
        position: 0,
        volume: 100,
    });

    // let rafId = requestAnimationFrame(tick);

    useEffect(() => {
        if (visualizerCtxt === 1) {
            center_y = height / 2
        } else if (visualizerCtxt === 0) {
            center_y = height
        } else center_y = height * 0
    }, [visualizerCtxt])


    useEffect(() => {
        context = new (window.AudioContext || window.webkitAudioContext)()
        if (state.audio) {
            source = context.createMediaElementSource(state.audio)
            analyser = context.createAnalyser()
            source.connect(analyser);
            analyser.connect(context.destination);
            frequency_array = new Uint8Array(analyser.frequencyBinCount / 2);
            state.audio.crossOrigin = "anonymous"

            if (positionCtxt !== null) {
                state.audio.currentTime = positionCtxt
            }
            if (status === "PLAYING") {
                tick()
            }
            // console.log(context, analyser)
            // console.log(frequency_array, analyser.frequencyBinCount,);
            // console.log(state.audio, context)
        }
    }, [playCtxt])

    const animationLooper = (canvas) => {
        if (!canvas || !state.audio) return null
        // console.log("animation looper called")
        width = window.innerWidth;
        height = window.innerHeight;

        center_x = width / 2;
        // //* height  || height / 2 for placement at bottom of page
        // center_y = height / 2;
        // if (visualizerCtxt === 1) {
        //     center_y = height / 2
        // } else center_y = height


        // if (visualizerCtxt === 1) {
        //     center_y = height / 2
        // } else center_y = height


        // center_y = visualizerCtxt === 1 ? height / 2 : height
        console.log(center_y, "center y")

        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext("2d");
        //* what if I just counted every other bin would this help with optimization
        //* this optimized and is working
        for (let i = 0; i < bars; i = i + 2) {
            // console.log(i, frequency_array[i])
            // console.log(frequency_array)

            //divide a circle into equal part
            // const rads = Math.PI * 2 / bars * 2;

            //* orig
            // console.log(frequency_array, analyser);
            // bar_height = frequency_array[i] * 2;
            // const x = center_x + Math.cos(rads * i) * (radius);
            // const y = center_y + Math.sin(rads * i) * (radius);
            // x_end = center_x + Math.cos(rads * i) * (radius + bar_height);
            // y_end = center_y + Math.sin(rads * i) * (radius + bar_height);

            //* practice
            const rads = Math.PI * 2 / bars * 2;
            //* control height here
            // bar_height = frequency_array[i] * 4.5;
            bar_height = frequency_array[i] * 3.5;
            // center_x = center_x * Math.random()
            // center_y = center_y * Math.random()
            const x = center_x + Math.cos(rads * i) * (radius);
            const y = center_y + Math.sin(rads * i) * (radius);
            // const x = center_x + Math.cos(rads * i) * (radius);
            // const y = center_y + Math.sin(rads * i) * (radius);
            x_end = center_x + Math.cos(rads * i) * (radius + bar_height);
            y_end = center_x + Math.sin(rads * i) * (radius + bar_height);

            //* experimental kick
            // if (i === 2 && frequency_array[i] > 150 || i === 40 && frequency_array[i] > 100 ||
            //     i === 68 && frequency_array[i] > 190) {
            // if (frequency_array[i] > 175) {
            //     //draw a bar
            //     drawBar(x, y, x_end, y_end, frequency_array[i], ctx, canvas, true);
            // } else {
            //draw a bar
            drawBar(x, y, x_end, y_end, frequency_array[i], ctx, canvas);
            // }
        }
    }

    const colorHelper = (valence) => {
        if (valence <= 0.25) {
            return "#fc030b"
        }
        if (valence > 0.25 && valence <= 0.5) {
            return "#5632a8"
        }
        if (valence > 0.5 && valence <= 0.75) {
            return "#ba8330"
        }
        if (valence > 0.75) {
            return "#30b5ba"
        }
    }

    const shadowHelper = (valence) => {
        if (valence <= 0.15) {
            return "green"
        }
        if (valence > 0.15 && valence <= 0.25) {
            return "blue"
        }
        if (valence > 0.25 && valence <= 0.35) {
            return "orange"
        }
        if (valence > 0.35 && valence <= 0.5) {
            return "pink"
        }
        if (valence > 0.5 && valence <= 0.65) {
            return "purple"
        }
        if (valence > 0.65 && valence <= 0.8) {
            return "lightgrey"
        }
        if (valence > 0.8) {
            return "red"
        }
    }

    const drawBar = (x1 = 0, y1 = 0, x2 = 0, y2 = 0, frequency, ctx, canvas, kick) => {
        // const gradient = ctx.createLinearGradient(20, 0, 200, canvas.height);
        const lineColor = playCtxt ? colorHelper(playCtxt.valence) : "rgb(0,105,255)";
        // const lineColor = "rgb(" + frequency / 1.2 + ", " + Math.random() * 44 + ", " + Math.random() * 54 + ")";
        // const lineColor = "rgb(" + frequency / 2 + ", " + Math.random() * 10 + ", " + Math.random() * 8 + ")";
        // gradient.addColorStop(0, "rgba(220, 54, 54, 1)");
        // gradient.addColorStop(1, "rgba(223, 44, 54, 1)");
        ctx.fillStyle = lineColor;

        // ctx.shadowColor = 'red';


        // ctx.quadraticCurveTo(230, 150, 250, 20)

        // ctx.strokeStyle = gradient;
        ctx.strokeStyle = lineColor;
        // ctx.lineWidth = bar_width;
        // ctx.lineWidth = bar_width;


        //* experimental kick section adding blur when 80 hz exceeds 200
        if (frequency > 189) {
            // ctx.shadowColor = "rgb(" + frequency + ", " + frequency + ", " + 255 + ")";
            // ctx.shadowColor = 'red';
            ctx.shadowColor = playCtxt ? shadowHelper(playCtxt.valence) : 'red';
            ctx.shadowBlur = 24;
            ctx.lineWidth = 2

        } else {
            ctx.shadowColor = playCtxt ? shadowHelper(playCtxt.valence) : 'red';
            ctx.shadowBlur = 14;
            // ctx.lineWidth = shadowHelper(playCtxt.valence) === "blue" ? .7 : playCtxt ? playCtxt.valence : bar_width;
            ctx.lineWidth = shadowHelper(playCtxt.valence) === "green" ? .7 : playCtxt ? playCtxt.valence : bar_width;
        }
        // ctx.lineWidth = frequency / 50;
        ctx.beginPath();
        // ctx.rotate(2 * Math.PI / 23)
        // ctx.setTransform(1, .2, .8, 1, 0, 0);
        // ctx.fillRect(0, 0, 100, 100);
        // ctx.setLineDash([5, 15,])
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        // ctx.arc(width / 2, height / 2, 50, 0, 2 * Math.PI)
        //* main control for shape drawing back into itself to create the 3d effect
        // ctx.ellipse(x1, y2, 1, 1, Math.PI / 4, 0, 2 * Math.PI)
        ell && ctx.ellipse(x1, y2, 2, 2, Math.PI / 8, 0, 2 * Math.PI)

        // ctx.ellipse(1100, 100, 1, 1, Math.PI / 4, 0, 2 * Math.PI)
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

            {
                playCtxt &&
                <img id="artist__image" className="fullvis__image full__buttons" src={playCtxt.image} alt="artist image" />
            }

            <div className="fullvis__controller">

                <Link onClick={() => (context.close(), state.audio ? setPositionCtxt(state.audio.currentTime) : null)} className="fullvis__button6 full__buttons" id="go-back" to="/">{`<<`}</Link>

                <button className="fullvis__button3 full__buttons italic" onClick={() => setVisualizerCtxt(0)}>
                    Fountain
                </button>

                <button className="fullvis__button4 full__buttons italic" onClick={() => setVisualizerCtxt(1)}>
                    Projector
                </button>
                <button className="fullvis__button4 full__buttons italic" onClick={() => setVisualizerCtxt(3)}>
                    Astral
                </button>

                <button className="fullvis__button1 full__buttons" onClick={() => context.state === "suspended" ? context.resume() : state.audio ? tick() : null}>Start</button>

                <button className="fullvis__button2 full__buttons" onClick={() => (
                    context.suspend(),
                    state.audio ? state.audio.currentTime = 0 : null
                )}>Stop</button>

                <button className="fullvis__button5 full__buttons" onClick={() => (
                    context.suspend()
                    // state.audio.currentTime = 0,
                    // console.log(state.audio.currentTime)
                )}>Pause</button>


            </div>

            <div className="visualizer__info">

                <div className="mode__box full__buttons">{playCtxt ? playCtxt.mode === 0 ? 'Mode: Minor' : "Mode: Major" : ""}</div>

                <div className="tempo__box full__buttons">{playCtxt ? `Tempo: ${playCtxt.tempo}` : ""}</div>

            </div>

            <Field />

            <canvas className="canvas__skin" ref={state.canvas} />

        </div>
    )
}

