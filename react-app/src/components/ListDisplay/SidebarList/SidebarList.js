import React from 'react'
import { useDispatch } from 'react-redux'
import "./SidebarList.css"
import { deleteAVibe } from '../../../store/vibes'
import { useVibeId } from '../../../context/VibeContext'
import { useArtistPage } from '../../../context/ArtistPageContext'
import { useArtistId } from '../../../context/ArtistIdContext'

function SidebarList({ vibes }) {
    const dispatch = useDispatch()
    const { vibeIdCtxt, setVibeIdCtxt } = useVibeId()
    const { artistPageCtxt, setArtistPageCtxt } = useArtistPage()
    const { artistIdCtxt, setArtistIdCtxt } = useArtistId()
    return (
        <div>
            {vibes.map((vibe) => (
                <li className='vibe__li' onClick={() => { return (setVibeIdCtxt(vibe.id), setArtistPageCtxt(false)) }} key={vibe.id}>
                    {vibe.name} <br />
                    <button className=" bg-transparent text-white font-bold py-1 px-4 rounded" onClick={() => dispatch(deleteAVibe(vibe.id))}> Delete Vibe</button>
                </li>
            ))
            }
        </div >
    )
}

export default SidebarList
