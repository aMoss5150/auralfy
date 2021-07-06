import React from 'react'
import { useDispatch } from 'react-redux'
import "./SidebarList.css"
import { deleteAVibe } from '../../../store/vibes'
import { useVibeId } from '../../../context/VibeContext'
import { useArtistPage } from '../../../context/ArtistPageContext'
import { useArtistId } from '../../../context/ArtistIdContext'
import { useColor } from '../../../context/ColorContext'

function SidebarList({ vibes }) {
    const dispatch = useDispatch()
    const { vibeIdCtxt, setVibeIdCtxt } = useVibeId()
    const { colorCtxt } = useColor()
    const { artistPageCtxt, setArtistPageCtxt } = useArtistPage()
    const { artistIdCtxt, setArtistIdCtxt } = useArtistId()
    let check = null
    return (
        <div>
            {vibes.map((vibe) => (
                <li className={`vibe__li ${colorCtxt === false ? "headers__colors2" : "headers__colors3"}  bg-transparent font-bold py-2 px-4 rounded`} onClick={() => { return (setVibeIdCtxt(vibe.id), setArtistPageCtxt(false)) }} key={vibe.id}>
                    #{vibe.name} <br />
                    <button className={`${colorCtxt === false ? 'headers__colors2' : 'headers__colors3'} bg-transparent font-bold py-1 px-14 rounded" onClick={() => dispatch(deleteAVibe(vibe.id))}`}>-del</button>
                </li>
            ))
            }
        </div >
    )
}

export default SidebarList
