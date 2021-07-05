import React from 'react'

function ArtistPreview({ artist }) {
    return (
        <div id="artist" className="artist__card headers__colors2">
            <img id="artist__image" style={{ height: "160px" }} src="https://static.dw.com/image/45095573_303.jpg" />
            <div>
                {artist.toUpperCase()}
            </div>

        </div >
    )
}

export default ArtistPreview
