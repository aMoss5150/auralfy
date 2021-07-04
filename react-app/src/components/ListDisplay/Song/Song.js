import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { getAllSongs } from '../../../store/songs'
// import { getAllVibes } from '../../../store/vibes'
import './Song.css'


function Song({ song }) {
    const dispatch = useDispatch()
    const songs = useSelector(state => state.songs)

    useEffect(() => {
        // dispatch()
    }, [])

    if (!song) return null
    // if (!vibeId) return null

    return (
        <div className="song__container">
            <div className="songartist">
                {song.name} -
            </div>
            <div className="songnamealbum">
                "{song.artist}" - "{song?.album_name}"
            </div>

        </div>
    )
}

export default Song
