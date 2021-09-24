import React, { useEffect, useState } from 'react';
import Canvas from './Canvas';
import { usePlay } from '../../context/PlayContext'
import "./CanvasCC.css"



const Visualizer = ({ songFile }) => {
    const { playCtxt, setPlayCtxt } = usePlay()
    const [loaded, setLoaded] = useState(false)
    const [songToPlay, setSongToPlay] = useState(null)

    useEffect(() => {
        setLoaded(false)
        // console.log(playCtxt, "visualizer index.js");
        setSongToPlay(songFile)
        setLoaded(true)
    }, [playCtxt])
    if (!loaded) return null
    return <div className="visualizer__skin">
        <Canvas songFile={songToPlay} />
    </div>
}

export default Visualizer;