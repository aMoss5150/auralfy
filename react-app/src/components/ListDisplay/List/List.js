import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Song from '../Song/Song'
import "./List.css"

function List({ vibeId, vibeName }) {
    const dispatch = useDispatch()
    const songs = Object.values(useSelector(state => state.songs))
    const relations = useSelector(state => state.relations)[0]
    const relation = relations ? relations[vibeId] : null

    const songsOnList = songs?.filter((song) => {
        if (relation?.includes(song.id)) {
            return song
        }
    })
    if (!vibeId) return null
    if (!songsOnList) return null
    return (
        <div className="list__container">
            <hr />
            {vibeName}
            {songsOnList.map((song) => (
                <Song key={song.id} song={song} />
            ))}
            <br /><hr />
        </div>
    )
}

// {
//     songsOnList.map((song) => (
//         <Song song={song} />
//     ))
// }
export default List
