import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSongs } from "../../store/songs"
import { getAllRelations } from "../../store/relations"
import { getAllVibes, createAVibe, deleteAVibe, addSongToVibe } from "../../store/vibes"
import ListDisplay from '../ListDisplay/ListDisplay'
import Player from '../Player/Player'
import './Home.css'

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
        dispatch(addSongToVibe(3, 2))
    }


    useEffect(() => {
        dispatch(getAllSongs())
        dispatch(getAllVibes())
        dispatch(getAllRelations())
    }, [])

    if (!songs) return null
    return (
        <div className="homepage__container">
            HOME COMPONENT
            <div className="sidebar__parent">Sidebar</div>
            <div className="listdisplay__parent">
                <ListDisplay />
            </div>
            <div className='player__parent'>
                <Player />
            </div>
            ENDHOME COMPONENT
        </div>
    )
}
// <h1 className="text-xl font-bold">hello test</h1>
// <button onClick={() => handleCreateVibe()}>create a vibe</button>
// <button onClick={() => handleDeleteVibe()}>delete a vibe</button>
// <button onClick={() => handleAddSong()}>add a song</button>

export default Home
