import React from 'react'

function ArtistPreview({ artist }) {
    return (
        <div className="artist__card">
            <div>
                image holder for {artist}
            </div>
            <div>
                {artist.toUpperCase()}
            </div>
        </div>
    )
}

export default ArtistPreview
