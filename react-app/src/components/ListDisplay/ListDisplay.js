import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllVibes } from '../../store/vibes'
import List from '../ListDisplay/List/List'
import './ListDisplay.css'



function ListDisplay() {
    const dispatch = useDispatch()
    const vibes = Object.values(useSelector(state => state.vibes))

    useEffect(() => {
        dispatch(getAllVibes())
    }, [])

    if (!vibes) return null
    return (
        <div className="listdisplay__container">
            {vibes.map((vibe) => (
                <List key={vibe.id} vibeId={vibe.id} vibeName={vibe.name} />
            ))}
        </div>
    )
}
export default ListDisplay
