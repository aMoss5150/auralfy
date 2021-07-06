import React from 'react'
import MiniVisualizer from './MiniVisuallizer/MiniVisualizer'
import Controls from './Controls/Controls'
import { useColor } from '../../context/ColorContext'
import "./Player.css"

function Player({ song }) {
    const { colorCtxt } = useColor()
    return (
        <div className={`player__container ${colorCtxt === false ? "headers__colors" : "headers__colors4"}`}>2.Player Component
            <div className="player__parent">
                <Controls />
            </div>
            <div className='minivis__parent'>
                <MiniVisualizer />
            </div>
            2. End Player Component
        </div>
    )
}

export default Player
