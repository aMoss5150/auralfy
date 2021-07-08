import React, { useState, useEffect, useRef } from 'react'
import MiniVisualizer from './MiniVisualizer/MiniVisualizer'
import Controls from './Controls/Controls'
import Canvas from '../Canvas/Canvas'
import { useColor } from '../../context/ColorContext'
import Sound from 'react-hifi'
import "./Player.css"
{/* <Controls /> */ }

// // let url = "https://sampler-dev.s3.us-west-1.amazonaws.com/2xoho3yDpD9wHkMPBBk7cwWP"
// let url = "https://song-storage-5150.s3.amazonaws.com/auralfy-music/01+-+I+Got+The....mp3"
// // audio element creation in order to pass to the context
// const audio = new Audio(url);
// audio.crossOrigin = "anonymous"
// // context is created to act as an audio graph
// const ctx = new AudioContext();
// // a source is create by passing audio into the context
// const track = ctx.createMediaElementSource(audio)
// // analyser node is create for visualization
// const analyser = ctx.createAnalyser();
// // source and analyser are connected together before redirection to ST OUT
// track.connect(analyser)
// analyser.connect(ctx.destination)
// // allow for insecure requests

// let bufferLength = analyser.frequencyBinCount;
// let dataArray = new Uint8Array(bufferLength);
// const stream = stream_dest.stream;
// const out = ctx.destination
// const stream_dest = ctx.createMediaStreamDestination();
// const source = ctx.createMediaElementSource(audio);
// analyser.connect(ctx.destination);

// analyser.getByteTimeDomainData(dataArray);
// this is dealing with the frequency data rather than time domain data
//analyser.getByteFrequencyData(dataArray)

// const canvas = document.querySelector('.canvas__base');
// const canvasCtx = canvas.getContext('2d');
// canvasCtx.fillStyle = 'green';
// canvasCtx.fillRect(10, 10, 100, 100);
function Player({ song }) {
    const { colorCtxt } = useColor()
    const [playerLoaded, setPlayerLoaded] = useState(false)
    const [PLAY, setPLAY] = useState(false)
    const [STOP, setSTOP] = useState(false)
    const [PAUSE, setPAUSE] = useState(false)
    const [LOADING, setLOADING] = useState(true)
    const [URL, setURL] = useState("https://sampler-dev.s3.us-west-1.amazonaws.com/2xoho3yDpD9wHkMPBBk7cwWP")
    const [DATA, setDATA] = useState(null)
    // const [position, setPosition] = useState(audio.position)

    useEffect(() => {
        if (PLAY) {
            audio.play()
            // // ctx.resume()
            // analyser.fftSize = 1024;
            // var bufferLength = analyser.fftSize;
            // // bufferLength
            // // the data array is created as a holder
            // var dataArray = new Uint8Array(analyser.frequencyBinCount);
            // // getByte is invoked to fill the data array
            // analyser.getByteFrequencyData(dataArray)
            // setDATA(dataArray)
            // // data is now container about frequency data, this will be used
            // // by the canvas to draw
            // console.log(dataArray)
            // console.log(DATA)
            // console.log(ana)

            // let ana = analyser.getByteTimeDomainData(dataArray);


        } if (PAUSE) {
            // audio.pause()
            console.log("audio pause")
        } if (STOP) {
            audio.pause()
            // audio.currentTime = 0
            console.log("audio stop")
        }
        // audio.play()
    }, [PLAY, STOP, PAUSE])


    useEffect(() => {
        let ctx
        if (playerLoaded) {
            // let url = "https://sampler-dev.s3.us-west-1.amazonaws.com/2xoho3yDpD9wHkMPBBk7cwWP"
            let url = "https://song-storage-5150.s3.amazonaws.com/auralfy-music/01+-+I+Got+The....mp3"
            // audio element creation in order to pass to the context
            const audio = new Audio(url);
            audio.crossOrigin = "anonymous"
            // context is created to act as an audio graph
            ctx = new AudioContext();
            // a source is create by passing audio into the context
            const track = ctx.createMediaElementSource(audio)
            // analyser node is create for visualization
            const analyser = ctx.createAnalyser();
            // source and analyser are connected together before redirection to ST OUT
            track.connect(analyser)
            analyser.connect(ctx.destination)
            // allow for insecure requests
        }
        if (!playerLoaded) {
            ctx.destroy()
        }
    }, [playerLoaded])


    useEffect(() => {
        setPlayerLoaded(true)
        return () => setPlayerLoaded(false)
    }, [])
    if (!playerLoaded) return null
    return (
        <div className={`player__container ${colorCtxt === false ? "headers__colors" : "headers__colors4"}`}>2.Player Component

            <div className="player__parent">
                <div className="controls__parent">
                    controls
                    <button className="play__button controls__parent"
                        onClick={() => {
                            return (
                                // console.log('playing'),
                                // ctx.resume,
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
                    <button onClick={() => {
                        var dataArray = new Uint8Array(analyser.frequencyBinCount)
                        analyser.getByteFrequencyData(dataArray)
                        setDATA(dataArray)
                        return (
                            console.log(DATA)
                        )
                    }}>check</button>
                </div>
            </div>
            <div className='minivis__parent'>
                <MiniVisualizer />
            </div>
            2. End Player Component
        </div >
    )
}

export default Player
