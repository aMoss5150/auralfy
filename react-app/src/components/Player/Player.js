import React from 'react'
// import MiniVisualizer from './MiniVisualizer/MiniVisualizer'
// import Controls from './Controls/Controls'
// import Canvas from '../Canvas/Canvas'
import Player2 from '../Player2/Player2'

import { useColor } from '../../context/ColorContext'
// import Sound, {
//     Osciloscope, BasicControls
// } from 'react-hifi'
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



    return (
        <div className={`player__container ${colorCtxt === false ? "headers__colors" : "headers__colors4"}`}>
            <div className="player__parent">
                <Player2 />
            </div>


        </div >
    )



}
export default Player
