import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSongs } from "../../store/songs"
import { getAllVibes, createAVibe, deleteAVibe, addSongToVibe } from "../../store/vibes"
import ListDisplay from '../ListDisplay/ListDisplay'
import Player from '../Player/Player'
import styles from './Home.module.css'

function Home() {
    const dispatch = useDispatch()
    let songs = Object.values(useSelector(state => state.songs))
    let vibes = useSelector(state => state.vibes)


    function handleCreateVibe(newVibeName) {
        dispatch(createAVibe('test'))
    }

    function handleDeleteVibe(vibeId) {
        dispatch(deleteAVibe(12))
    }

    function handleAddSong(songId, vibeId) {
        dispatch(addSongToVibe(1, 12))
    }


    useEffect(() => {
        dispatch(getAllSongs())
        dispatch(getAllVibes())
    }, [])

    if (!songs) return null
    return (
        <div className={styles.homeDisplayContainer}>
            HOME COMPONENT
            <ListDisplay />
            <button onClick={() => handleCreateVibe()}>create a vibe</button>
            <button onClick={() => handleDeleteVibe()}>delete a vibe</button>
            <button onClick={() => handleAddSong()}>add a song</button>

            <Player />
            ENDHOME COMPONENT
        </div>
    )
}

export default Home
