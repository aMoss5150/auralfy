import React, { useState } from 'react'
import MiniVisualizer from './MiniVisuallizer/MiniVisualizer'
import Controls from './Controls/Controls'
import { useColor } from '../../context/ColorContext'
import "./Player.css"
{/* <Controls /> */ }

function Player({ song }) {
    const { colorCtxt } = useColor()
    const [play, setPlay] = useState(false)
    return (
        <div className={`player__container ${colorCtxt === false ? "headers__colors" : "headers__colors4"}`}>2.Player Component
            <div className="player__parent">
                <div className="controls__parent">
                    controls
                    <span className="play__button" controls__parent
                        onClick={(() => setPlay(true))}

                    > PLAY</span>
                </div>
            </div>
            <div className='minivis__parent'>
                <MiniVisualizer />
            </div>
            2. End Player Component
        </div>
    )
}

export default Player
