import React, { useRef } from 'react'
import Sound, { pluginFactory, plugins } from 'react-hifi';

import "./Canvas.css"
console.log(Sound)


function Canvas() {
    const canvasRef = useRef(null)
    return (
        <canvas
            className="canvas__base"
            ref={canvasRef}
            width={window.innerWidth / 2}
            height={window.innerHeight / 4}
            onClick={e => {
                const canvas = canvasRef.current
                const ctx = canvas.getContext('2d')
                // draw(ctx, { x: e.clientX, y: e.clientY })
            }}
        >
            canvasTest
        </canvas>
    )
}

export default Canvas
