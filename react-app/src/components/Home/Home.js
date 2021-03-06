import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSongs } from "../../store/songs"
import { getAllRelations } from "../../store/relations"
import { getAllVibes, createAVibe, deleteAVibe, addSongToVibe } from "../../store/vibes"
import ArtistPage from '../ArtistPage/ArtistPage'
import ListDisplay from '../ListDisplay/ListDisplay'
import SidebarList from '../ListDisplay/SidebarList/SidebarList'
import Player from '../Player/Player'
import { useVibeId } from '../../context/VibeContext'
import { useArtistPage } from '../../context/ArtistPageContext'
import { useArtistId } from '../../context/ArtistIdContext'
import { useColor } from '../../context/ColorContext'
import { usePlay } from '../../context/PlayContext'
import logo1 from '../../images/auralfy-light.jpg'

import './Home.css'

function Home() {
    const dispatch = useDispatch()
    let songs = Object.values(useSelector(state => state.songs))
    let vibes = Object.values(useSelector(state => state.vibes))
    const { vibeIdCtxt, setVibeIdCtxt } = useVibeId()
    const { artistPageCtxt, setArtistPageCtxt } = useArtistPage()
    const { artistIdCtxt, setArtistIdCtxt } = useArtistId()
    const { playCtxt, setPlayCtxt } = usePlay()
    const { colorCtxt } = useColor()
    const [createOpen, setCreateOpen] = useState(false)
    const [vibeName, setVibeName] = useState('')
    const [homeLoaded, setHomeLoaded] = useState(false)

    let targetVibe = vibes?.filter((vibe) => {
        if (vibe.id === vibeIdCtxt) {
            return vibe
        }
    })

    function handleCreateVibe(e) {
        e.preventDefault()
        dispatch(createAVibe(vibeName))
        setVibeName('')
        setCreateOpen(false)
    }
    useEffect(() => {
        setHomeLoaded(false)
        setHomeLoaded(true)
    }, [playCtxt])

    useEffect(() => {
        dispatch(getAllSongs())
        dispatch(getAllVibes())
        dispatch(getAllRelations())
        setHomeLoaded(true)
        return () => setHomeLoaded(false)
    }, [])

    if (!homeLoaded) return null
    if (!songs) return null
    return (
        <div className="homepage__container">
            {/* <Canvas /> */}
            <div className="sidebar__parent headers__colors2">
                <button className={`${colorCtxt === false ? "headers__colors2" : "headers__colors4"} bg-transparent font-bold py-1 px-4 rounded`} onClick={() => { return (setArtistPageCtxt(true), setArtistIdCtxt(null)) }}>Artists</button>
                <button className={`${colorCtxt === false ? "headers__colors2" : "headers__colors4"} bg-transparent font-bold py-1 px-4 rounded`} onClick={() => { return (setVibeIdCtxt(null), setArtistPageCtxt(false)) }}> All My Songs</button>
                <button className={`${colorCtxt === false ? "headers__colors2" : "headers__colors4"} bg-transparent font-bold py-1 px-4 rounded`} onClick={() => setCreateOpen(true)}>Add a Vibe</button>
                {createOpen &&
                    <div className="vibeadder">
                        <form action="" onSubmit={(e) => handleCreateVibe(e)}>
                            <input className="vibeadderfield" type="text" value={vibeName} onChange={(e) => setVibeName(e.target.value)} />
                        </form>
                        <div className="addvibebuttons">
                            {/* <button type="submit" ><i className="icons fas fa-plus-square"></i></button> */}

                            <i className="icons fas fa-window-close" onClick={() => setCreateOpen(false)}></i>
                        </div>
                    </div>
                }
                <SidebarList vibes={vibes} />
            </div>

            <div className="listdisplay__parent">
                {artistPageCtxt && <ArtistPage />}
                {!artistPageCtxt && vibes && <ListDisplay targetVibe={vibeIdCtxt === null ? vibes : targetVibe} />}
            </div>
            {/* <div className="backvis__parent">
                {homeLoaded && <Visualizer songFile={playCtxt} />
                }
            </div> */}

            <div className='player__parent'>
                {/* <Player2 /> */}
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
