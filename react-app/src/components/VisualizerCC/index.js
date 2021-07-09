import React from 'react';
import Canvas from './Canvas';
import "./CanvasCC.css"

const Visualizer = ({ songFile }) => {
    return <div className="visualizer__skin">
        <header className="App-header">
            <Canvas songFile={songFile} />
        </header>
    </div>
}

export default Visualizer;