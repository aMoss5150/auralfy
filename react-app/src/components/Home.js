import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSongs } from "../store/songs"
import { getAllVibes } from "../store/vibes"

function Home() {
    const dispatch = useDispatch()
    let songs = Object.values(useSelector(state => state.songs))
    let vibes = useSelector(state => state.vibes)
    console.log(songs)
    useEffect(() => {
        dispatch(getAllSongs())
        dispatch(getAllVibes())
    }, [])

    if (!songs) return null
    return (
        <div>
            {
                songs.map((song) => (
                    <div key={song.id}>
                        {song.name}---
                        {song.artist}
                        <br />
                    </div>
                ))
            }
        </div>
    )
}

export default Home
