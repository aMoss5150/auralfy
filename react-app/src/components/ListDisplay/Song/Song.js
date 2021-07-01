import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { getAllSongs } from '../../../store/songs'
// import { getAllVibes } from '../../../store/vibes'


function Song({ song }) {
    const dispatch = useDispatch()
    const songs = useSelector(state => state.songs)

    useEffect(() => {
        // dispatch()
    }, [])

    if (!song) return null
    // if (!vibeId) return null

    return (
        <div>
            -----------------Song Component Test-
            {song.name}
        </div>
    )
}

export default Song
