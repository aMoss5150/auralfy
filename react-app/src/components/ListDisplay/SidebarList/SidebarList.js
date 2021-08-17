import React from 'react'
import "./SidebarList.css"
import { useVibeId } from '../../../context/VibeContext'
import { useArtistPage } from '../../../context/ArtistPageContext'
import { useColor } from '../../../context/ColorContext'

function SidebarList({ vibes }) {
    const { vibeIdCtxt, setVibeIdCtxt } = useVibeId()
    const { colorCtxt } = useColor()
    const { artistPageCtxt, setArtistPageCtxt } = useArtistPage()


    return (
        <div>
            {vibes.map((vibe) => (
                <li className={`vibe__li ${colorCtxt === false ? "headers__colors2" : "headers__colors3"}  bg-transparent font-bold py-2 px-4 rounded`} key={vibe.id}>
                    <div className="vibe__title" onClick={() => { return (setVibeIdCtxt(vibe.id), setArtistPageCtxt(false)) }} >
                        #{vibe.name} <br />
                    </div>
                    {/* <button className={`${colorCtxt === false ? 'headers__colors2' : 'headers__colors3'} bg-transparent font-bold py-1 px-14 rounded`} >-del</button> */}
                </li>
            ))
            }
        </div >
    )
}

export default SidebarList
