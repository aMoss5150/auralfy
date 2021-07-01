import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Song from '../Song/Song'

function List({ vibeId }) {
    const dispatch = useDispatch()

    const songs = Object.values(useSelector(state => state.songs))
    const songsOnList = songs?.filter((song) => song.vibe_id === vibeId)
    console.log(songsOnList)

    if (!vibeId) return null
    // if (!songsOnList) return null

    return (
        <div>
            ------List Component
            {songsOnList.map((song) => (
                <Song key={`${vibeId}, ${song.id}`} song={song} />
            ))}
            ------EndList Component
        </div>
    )
}

// {
//     songsOnList.map((song) => (
//         <Song song={song} />
//     ))
// }
export default List
