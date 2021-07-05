import React from 'react'
import MiniVisualizer from './MiniVisuallizer/MiniVisualizer'
import Controls from './Controls/Controls'
import "./Player.css"

function Player({ song }) {
    return (
        <div className="player__container headers__colors">2.Player Component
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
