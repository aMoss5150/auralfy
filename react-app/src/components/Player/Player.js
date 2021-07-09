import React, { useState, useEffect, useRef } from 'react'
import MiniVisualizer from './MiniVisualizer/MiniVisualizer'
import Controls from './Controls/Controls'
import Canvas from '../Canvas/Canvas'

import { useColor } from '../../context/ColorContext'
import Sound, {
    Osciloscope, BasicControls
} from 'react-hifi'
import "./Player.css"
{/* <Controls /> */ }

// // let url = "https://sampler-dev.s3.us-west-1.amazonaws.com/2xoho3yDpD9wHkMPBBk7cwWP"
// // Joss I got the
// let url = "https://song-storage-5150.s3.amazonaws.com/auralfy-music/01+-+I+Got+The....mp3"
// // drake no tellin
// // let url = "https://song-storage-5150.s3.amazonaws.com/auralfy-music/01+-+I+Got+The....mp3"
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


function Player({ song }) {
    const { colorCtxt } = useColor()
    const [URL, setURL] = useState("https://song-storage-5150.s3.amazonaws.com/auralfy-music/01+-+I+Got+The....mp3")
    // hifi STATE
    const [STATUS, setSTATUS] = useState("PAUSED")
    const [DURATION, setDURATION] = useState(0)
    const [POSITION, setPOSITION] = useState(0)
    const [LOADING, setLOADING] = useState(false)
    //end HIFI STATE

    //for data stream
    const [DATA, setDATA] = useState(null)

    const canvasElement = useRef();
    let cCtx;

    // const handleDataViz = (DATA) => {
    //     if (!cCtx) {
    //         cCtx = canvasElement.current.getContext('2d');
    //     }

    //     cCtx.fillStyle = 'white';
    //     cCtx.fillRect(0, 0, canvasElement.current.width, canvasElement.current.height);

    //     cCtx.lineWidth = 2;
    //     cCtx.strokeStyle = 'blue';

    //     cCtx.beginPath();

    //     const [x, y] = DATA.pop();
    //     cCtx.moveTo(x, y);

    //     DATA.forEach(([x, y]) => cCtx.lineTo(x, y));

    //     cCtx.lineTo(canvasElement.current.width, canvasElement.current.height / 2);
    //     cCtx.stroke();
    // };


    return (
        <div className={`player__container ${colorCtxt === false ? "headers__colors" : "headers__colors4"}`}>2.Player Component



            <div className="player__parent">
                {/* <div className="controls__parent">
                    controls
                    <button className="play__button controls__parent"
                        onClick={() => setSTATUS('PLAYING')}
                    > PLAY</button>
                    <button className="stop__button controls__parent"
                        onClick={() => setSTATUS('STOPPED')}
                    > STOP</button>
                    <button onClick={() => {
                        // var dataArray = new Uint8Array(analyser.frequencyBinCount)
                        // analyser.getByteFrequencyData(dataArray)
                        // setDATA(dataArray)
                        return (
                            console.log(DATA)
                        )
                    }}>check</button>
                </div> */}
            </div>

            2. End Player Component
        </div >
    )
}

{/* <BasicControls
    onPlay={() => setSTATUS('PLAYING')}
    onPause={() => setSTATUS('PAUSED')}
    onStop={() => setSTATUS('STOPPED')}
    duration={DURATION}
    position={POSITION}
    onTimeChange={e => setPOSITION(e.target.value)}
/>  */}
//  <Sound
//             url={URL}
//             playStatus={STATUS}
//             position={POSITION}
//             onFinishedPlaying={() => setSTATUS("STOPPED")}
//             onLoad={() => setLOADING(false)}
//             onLoading={() => setLOADING(true)}
//             onPlaying={data => setDATA(data)}
//         />

//         <Osciloscope
//             onVisualisationData={() => handleDataViz(DATA)}
//             height={canvasElement.current && canvasElement.current.height}
//             width={canvasElement.current && canvasElement.current.width}
//         />


//   <div>
{/* <canvas style={{ width: '100%', height: '100px' }} ref={canvasElement} /> */ }
// </div >


export default Player
