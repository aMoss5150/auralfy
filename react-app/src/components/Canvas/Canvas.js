import React, { useRef } from 'react'
import Sound, { pluginFactory, plugins } from 'react-hifi';

import "./Canvas.css"


function Canvas() {
    const canvasRef = useRef(null)
    return (
        <canvas
            className="canvas__base"
            ref={canvasRef}
            width={window.innerWidth / 2}
            height={window.innerHeight / 2}
            onClick={e => {
                const canvas = canvasRef.current
                const ctx = canvas.getContext('2d')
                alert(e.clientX)
                // draw(ctx, { x: e.clientX, y: e.clientY })
            }}
        >
            canvasTest
        </canvas>
    )
}

export default Canvas
