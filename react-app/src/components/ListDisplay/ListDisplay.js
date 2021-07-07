import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllVibes } from '../../store/vibes'
import { useColor } from '../../context/ColorContext'
import List from '../ListDisplay/List/List'
import './ListDisplay.css'



function ListDisplay({ targetVibe }) {
    const dispatch = useDispatch()
    const { colorCtxt } = useColor()
    const vibes = Object.values(useSelector(state => state.vibes))
    console.log(vibes)

    // useEffect(() => {
    //     dispatch(getAllVibes())
    // }, [])

    if (!targetVibe) return null
    if (!vibes) return null
    return (
        <div className={`listdisplay__container ${colorCtxt === false ? "headers__colors2 centerer" : "headers__colors3 centerer__red"}`}>
            {targetVibe && targetVibe.map((vibe) => (
                <List key={vibe.id} vibeId={vibe.id} vibeName={vibe.name} />
            ))}
        </ div>
    )
}

// {
// targetVibe.length === 0 && vibes.map((vibe) => (
//     <List key={vibe.id} vibeId={vibe.id} vibeName={vibe.name} />
// ))
// }
export default ListDisplay
