import React, { useState, useEffect, useRef } from 'react'
import MiniVisualizer from './MiniVisualizer/MiniVisualizer'
import Controls from './Controls/Controls'
import Canvas from '../Canvas/Canvas'
import { useColor } from '../../context/ColorContext'
import Sound from 'react-hifi'
import "./Player.css"
{/* <Controls /> */ }

let url = "https://sampler-dev.s3.us-west-1.amazonaws.com/2xoho3yDpD9wHkMPBBk7cwWP"
// const audio = new Audio(url);
// audio.loop = true
const audio = <audio autoPlay src={url}></audio>
const ctx = new AudioContext();
const track = ctx.createMediaElementSource(audio)
const analyser = ctx.createAnalyser();
analyser.connect(ctx.destination)
// audio.crossOrigin = "anonymous"
// let bufferLength = analyser.frequencyBinCount;
// let dataArray = new Uint8Array(bufferLength);
// const stream = stream_dest.stream;

// const out = ctx.destination
// const stream_dest = ctx.createMediaStreamDestination();
// const source = ctx.createMediaElementSource(audio);
// analyser.connect(ctx.destination);
// 
// analyser.getByteTimeDomainData(dataArray);


// const canvas = document.querySelector('.canvas__base');
// const canvasCtx = canvas.getContext('2d');
// canvasCtx.fillStyle = 'green';
// canvasCtx.fillRect(10, 10, 100, 100);
function Player({ song }) {
    const { colorCtxt } = useColor()
    const [PLAY, setPLAY] = useState(true)
    const [STOP, setSTOP] = useState(true)
    const [PAUSE, setPAUSE] = useState(false)
    const [LOADING, setLOADING] = useState(true)
    const [URL, setURL] = useState("https://sampler-dev.s3.us-west-1.amazonaws.com/2xoho3yDpD9wHkMPBBk7cwWP")
    const [DATA, setDATA] = useState(null)
    // const [position, setPosition] = useState(audio.position)

    useEffect(() => {
        if (PLAY) {
            // audio.play()
            ctx.resume()
            analyser.fftSize = 2048;

            var bufferLength = analyser.fftSize;
            console.log(bufferLength);
            var dataArray = new Uint8Array(bufferLength);
            console.log(analyser.getByteFrequencyData(dataArray))
            console.log(dataArray)


        } if (PAUSE) {
            // audio.pause()
            console.log("audio pause")
        } if (STOP) {
            // audio.pause()
            // audio.currentTime = 0
            console.log("audio stop")
        }

    }, [PLAY, STOP, PAUSE])

    useEffect(() => {

        // audio.play()

    })
    return (
        <div className={`player__container ${colorCtxt === false ? "headers__colors" : "headers__colors4"}`}>2.Player Component

            <div className="player__parent">
                <div className="controls__parent">
                    controls
                    <button className="play__button controls__parent"
                        onClick={() => {
                            return (
                                // console.log('playing'),
                                setPLAY(true),
                                setSTOP(false)
                            )
                        }}
                    > PLAY</button>
                    <button className="stop__button controls__parent"
                        onClick={() => {
                            return (
                                // console.log('NOT playing'),
                                setSTOP(true),
                                setPLAY(false)
                            )
                        }}
                    > STOP</button>
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
