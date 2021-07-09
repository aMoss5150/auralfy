import React from 'react';
import Canvas from './Canvas';
import "./CanvasCC.css"

const Visualizer = ({ songFile }) => {
    return <div className="visualizer__skin">
        <Canvas songFile={songFile} />
    </div>
}

export default Visualizer;