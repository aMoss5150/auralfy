import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSongs } from "../../store/songs"
import { getAllRelations } from "../../store/relations"
import { getAllVibes, createAVibe, deleteAVibe, addSongToVibe } from "../../store/vibes"
import ListDisplay from '../ListDisplay/ListDisplay'
import SidebarList from '../ListDisplay/SidebarList/SidebarList'
import Player from '../Player/Player'
import { useVibeId } from '../../context/VibeContext'
import './Home.css'

function Home() {
    const { vibeIdCtxt, setVibeIdCtxt } = useVibeId()
    const dispatch = useDispatch()
    let songs = Object.values(useSelector(state => state.songs))
    let vibes = Object.values(useSelector(state => state.vibes))

    let targetVibe = vibes?.filter((vibe) => {
        if (vibe.id === vibeIdCtxt) {
            return vibe
        }
    })

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
            <div className="sidebar__parent">
                My Vibes
                <SidebarList vibes={vibes} />
            </div>
            <div className="listdisplay__parent">
                <ListDisplay targetVibe={!vibeIdCtxt ? vibes : targetVibe} />
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
