import React, { useState, useEffect } from 'react'
import MiniVisualizer from './MiniVisuallizer/MiniVisualizer'
import Controls from './Controls/Controls'
import { useColor } from '../../context/ColorContext'
import "./Player.css"
{/* <Controls /> */ }



let url = "https://sampler-dev.s3.us-west-1.amazonaws.com/2xoho3yDpD9wHkMPBBk7cwWP"
const audio = new Audio(url);
audio.loop = true
const ctx = new AudioContext();
const analyser = ctx.createAnalyser();
const out = ctx.destination
const stream_dest = ctx.createMediaStreamDestination();
const source = ctx.createMediaElementSource(audio);
source.connect(ctx.destination);
// analyser.connect(ctx.destination)
// const stream = stream_dest.stream;
audio.crossOrigin = "anonymous"
console.log(source);


// const canvas = document.querySelector('.canvas__base');
// const canvasCtx = canvas.getContext('2d');
// canvasCtx.fillStyle = 'green';
// canvasCtx.fillRect(10, 10, 100, 100);
function Player({ song }) {
    const { colorCtxt } = useColor()
    const [play, setPlay] = useState(false)

    useEffect(() => {
        if (play) {
            audio.play()
        } else
            audio.pause()
        audio.currentTime = 0
    }, [play])

    return (
        <div className={`player__container ${colorCtxt === false ? "headers__colors" : "headers__colors4"}`}>2.Player Component
            <div className="player__parent">
                <div className="controls__parent">
                    controls
                    <span className="play__button" controls__parent
                        onClick={(() => setPlay(!play))}

                    > PLAY</span>
                </div>
            </div>
            <div className='minivis__parent'>
                <MiniVisualizer />
            </div>
            2. End Player Component
        </div>
    )
}

export default Player
