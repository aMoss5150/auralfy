import React from 'react'
import './Controls.css'
import { useColor } from '../../../context/ColorContext'

function Controls() {
    const { colorCtxt } = useColor()
    return (
        <div className={`controls__container ${colorCtxt === false ? "headers__colors" : "headers__colors4"}`}>
            ---Controls Component
        </div>
    )
}

export default Controls
