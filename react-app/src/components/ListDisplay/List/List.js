import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useVibeId } from '../../../context/VibeContext'
import { useChange } from '../../../context/ChangeContext'
import Song from '../Song/Song'
import { getAllRelations } from '../../../store/relations'
import Particles from 'react-particles-js'
import "./List.css"


import { deleteAVibe } from '../../../store/vibes'

function List({ vibeId, vibeName }) {
    const dispatch = useDispatch()
    const { vibeIdCtxt, setVibeIdCtxt } = useVibeId()
    const { changeCtxt } = useChange()
    const songs = Object.values(useSelector(state => state.songs))
    const relations = useSelector(state => state.relations)[0]
    const relation = relations ? relations[vibeId] : null
    const songsOnList = songs?.filter((song) => {
        if (relation?.includes(song.id)) {
            return song
        }
        return null
    })
    const songsOnList2 = songs?.filter((song) => {
        if (Object.values(relations).flat()?.includes(song.id)) {
            return song
        }
        return null
    })
    const songsSet = songsOnList ? new Set(songsOnList2) : null

    async function handleDeleteVibe(vibeId) {

        await dispatch(deleteAVibe(vibeId))
        if (vibeId === vibeIdCtxt) {
            setVibeIdCtxt(null)
        }
    }

    useEffect(() => {

        async function getData() {
            await dispatch(getAllRelations())
        }
        getData()
    }, [changeCtxt])

    if (!vibeId) return null
    if (!songsOnList) return null
    return (
        <div className="list__container">
            <div className="vibe__name__list font-thin font-serif">
                #{vibeIdCtxt ? vibeName : "all vibe songs"}
                <i className=" trash icons fas fa-trash py-1 px-14 rounded" onClick={() => handleDeleteVibe(vibeIdCtxt)}></i>
            </div>
            {!vibeIdCtxt && Array.from(songsSet).map((song) => (
                <Song key={song.id} song={song} title={false} />

            ))}
            {vibeIdCtxt && vibeId && songsOnList && songsOnList.map((song) => (
                <Song key={song.id} song={song} title={true} />
            ))}

        </div>
    )
}

// {
//     songsOnList.map((song) => (
//         <Song song={song} />
//     ))
// }





export default List
