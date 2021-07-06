import React from 'react'
import { useColor } from '../../../context/ColorContext'

function ArtistPreview({ artist }) {
    const { colorCtxt } = useColor()
    return (
        <div id="artist" className={`artist__card m-2 ${colorCtxt === false ? "headers__colors2" : 'headers__colors3'}`}>
            <div className="m-2">
                <img id="artist__image" style={{ height: "200px" }} src="https://i.pinimg.com/originals/76/dd/71/76dd7149f5a20385211712c9672eb198.jpg" />
            </div>
            <div>
                {artist.toUpperCase()}
            </div>

        </div >
    )
}

export default ArtistPreview
