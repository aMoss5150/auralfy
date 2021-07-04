import React from 'react'
import { useDispatch } from 'react-redux'
import "./SidebarList.css"
import { useVibeId } from '../../../context/VibeContext'
import { deleteAVibe } from '../../../store/vibes'

function SidebarList({ vibes }) {
    const dispatch = useDispatch()
    const { vibeIdCtxt, setVibeIdCtxt } = useVibeId()
    return (
        <div>
            {vibes.map((vibe) => (
                <li className='vibe__li' onClick={() => setVibeIdCtxt(vibe.id)} key={vibe.id}>
                    {vibe.name}
                    <button onClick={() => dispatch(deleteAVibe(vibe.id))} >Del</button>
                </li>
            ))}
        </div>
    )
}

export default SidebarList
