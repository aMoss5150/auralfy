import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSongs } from "../../store/songs"
import { getAllRelations } from "../../store/relations"
import { getAllVibes, createAVibe, deleteAVibe, addSongToVibe } from "../../store/vibes"
import ArtistPage from '../ArtistPage/ArtistPage'
import ListDisplay from '../ListDisplay/ListDisplay'
import SidebarList from '../ListDisplay/SidebarList/SidebarList'
import Player from '../Player/Player'
import Canvas from '../Canvas/Canvas'
import { useVibeId } from '../../context/VibeContext'
import { useArtistPage } from '../../context/ArtistPageContext'
import { useArtistId } from '../../context/ArtistIdContext'
import { useColor } from '../../context/ColorContext'
import './Home.css'

function Home() {
    const { vibeIdCtxt, setVibeIdCtxt } = useVibeId()
    const { artistPageCtxt, setArtistPageCtxt } = useArtistPage()
    const { artistIdCtxt, setArtistIdCtxt } = useArtistId()
    const { colorCtxt } = useColor()
    const [createOpen, setCreateOpen] = useState(false)
    const [vibeName, setVibeName] = useState('')
    const [artistPage, setArtistPage] = useState(true)
    const dispatch = useDispatch()
    let songs = Object.values(useSelector(state => state.songs))
    let vibes = Object.values(useSelector(state => state.vibes))

    let targetVibe = vibes?.filter((vibe) => {
        if (vibe.id === vibeIdCtxt) {
            return vibe
        }
    })

    function handleCreateVibe() {
        dispatch(createAVibe(vibeName))
        setVibeName('')
        setCreateOpen(false)
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
            {/* <Canvas /> */}
            <div className="sidebar__parent headers__colors">
                <button className={`${colorCtxt === false ? "headers__colors" : "headers__colors4"} bg-transparent font-bold py-1 px-4 rounded`} onClick={() => { return (setArtistPageCtxt(true), setArtistIdCtxt(null)) }}>Artists Page</button>
                <button className={`${colorCtxt === false ? "headers__colors" : "headers__colors4"} bg-transparent font-bold py-1 px-4 rounded`} onClick={() => { return (setVibeIdCtxt(null), setArtistPageCtxt(false)) }}> View All Vibes</button>
                <button className={`${colorCtxt === false ? "headers__colors" : "headers__colors4"} bg-transparent font-bold py-1 px-4 rounded`} onClick={() => setCreateOpen(true)}>Add a Vibe</button>
                {createOpen &&
                    <form action="POST" onSubmit={handleCreateVibe}>
                        <input type="text" value={vibeName} onChange={(e) => setVibeName(e.target.value)} />
                        <button onClick={() => setCreateOpen(false)}>Close</button>
                    </form>}
                <SidebarList vibes={vibes} />
            </div>

            <div className="listdisplay__parent">
                {artistPageCtxt && <ArtistPage />}
                {!artistPageCtxt && vibes && <ListDisplay targetVibe={vibeIdCtxt === null ? vibes : targetVibe} />}
            </div>
            <div className='player__parent'>
                <Player />
            </div>

        </div >
    )
}

// <h1 className="text-xl font-bold">hello test</h1>
// <button onClick={() => handleCreateVibe()}>create a vibe</button>
// <button onClick={() => handleDeleteVibe()}>delete a vibe</button>
// <button onClick={() => handleAddSong()}>add a song</button>

export default Home
