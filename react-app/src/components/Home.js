import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSongs } from "../store/songs"
import { getAllVibes } from "../store/vibes"

function Home() {
    const dispatch = useDispatch()
    let songs = useSelector(state => state.songs)
    let vibes = useSelector(state => state.vibes)

    useEffect(() => {
        dispatch(getAllSongs())
        dispatch(getAllVibes())
    })

    if (!songs) return null
    return (
        <div>
            {Object.values(songs)?.map((song) => (
                <li key={song.id}>
                    song.name
                </li>
            ))}
        </div>
    )
}

export default Home
