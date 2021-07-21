import React from 'react'
import { useColor } from '../../../context/ColorContext'


// *this component is the small artist card displayed in the artistPage
function ArtistPreview({ song }) {
    const { colorCtxt } = useColor()
    return (
        <div id="artist" className={`artist__card m-2 ${colorCtxt === false ? "headers__colors2" : 'headers__colors3'}`}>
            <div className="m-2">
                <img id="artist__image" style={{ height: "200px", borderRadius: "2px" }} src={song.image} />
            </div>
            <div>
                {song?.artist.toUpperCase()}
            </div>

        </div >
    )
}

export default ArtistPreview
