```js
import React, { useState, useEffect, useRef } from 'react'
import MiniVisualizer from './MiniVisuallizer/MiniVisualizer'
import Controls from './Controls/Controls'
import Canvas from '../Canvas/Canvas'
import { useColor } from '../../context/ColorContext'
import "./Player.css"
{/* <Controls /> */ }



let url = "https://sampler-dev.s3.us-west-1.amazonaws.com/2xoho3yDpD9wHkMPBBk7cwWP"
const audio = new Audio(url);
audio.loop = true
const ctx = new AudioContext();
const analyser = ctx.createAnalyser();
let bufferLength = analyser.frequencyBinCount;
let dataArray = new Uint8Array(bufferLength);
// const out = ctx.destination
// const stream_dest = ctx.createMediaStreamDestination();
const source = ctx.createMediaElementSource(audio);
source.connect(ctx.destination);
// analyser.connect(ctx.destination)
// const stream = stream_dest.stream;
audio.crossOrigin = "anonymous"


// const canvas = document.querySelector('.canvas__base');
// const canvasCtx = canvas.getContext('2d');
// canvasCtx.fillStyle = 'green';
// canvasCtx.fillRect(10, 10, 100, 100);
function Player({ song }) {
    const { colorCtxt } = useColor()
    const [play, setPlay] = useState(false)
    // console.log(dataArray)
    //------------------------------------------------



    const canvasRef = useRef();
    let cCtx;

    const handleDataViz = (data) => {
        if (!cCtx) {
            cCtx = canvasRef.current.getContext('2d');
        }

        cCtx.fillStyle = 'white';
        cCtx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        cCtx.lineWidth = 2;
        cCtx.strokeStyle = 'green';

        cCtx.beginPath();

        const [x, y] = data.pop();
        cCtx.moveTo(x, y);

        data.forEach(([x, y]) => cCtx.lineTo(x, y));

        cCtx.lineTo(canvasRef.current.width, canvasRef.current.height / 2);
        cCtx.stroke();
        //------------------------------------------------
    }


    useEffect(() => {
        if (play) {
            audio.play()
        } else
            audio.pause()
        audio.currentTime = 0
    }, [play])

    return (
        <div className={`player__container ${colorCtxt === false ? "headers__colors" : "headers__colors4"}`}>2.Player Component
            <canvas
                className="canvas__base"
                ref={canvasRef}
                width={window.innerWidth / 2}
                height={window.innerHeight / 4}
                onClick={e => {
                    let canvas = canvasRef.current
                    canvas = canvas.getContext('2d')
                    alert(e.clientX)
                    handleDataViz([2433, 532])
                }}
            >
                canvasTest
            </canvas>
            <div className="player__parent">
                <div className="controls__parent">
                    controls
                    <span className="play__button controls__parent"
                        onClick={(() => setPlay(!play))}

                    > PLAY</span>
                </div>
            </div>
            <div className='minivis__parent'>
                <MiniVisualizer />
            </div>

             <Sound
                url={URL}
                autoPlay='false'
                playStatus={PLAY}
                position={position}
                onFinishedPlaying={() => setSTOP(true)}
                onLoad={() => setLOADING(false)}
                onLoading={() => setLOADING(true)}
                onPlaying={data => setDATA(data)}
            />
            
            2. End Player Component
        </div>
    )
}

export default Player

```js