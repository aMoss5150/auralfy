import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllVibes } from '../../store/vibes'
import List from '../ListDisplay/List/List'



function ListDisplay() {
    const dispatch = useDispatch()
    const vibes = Object.values(useSelector(state => state.vibes))
    // console.log(vibes)

    useEffect(() => {
        dispatch(getAllVibes())
    }, [])

    if (!vibes) return null
    return (
        <div>
            1.List Display Component
            {vibes.map((vibe) => (
                <List key={vibe.id} vibeId={vibe.id} />
            ))}
            1.EndList Display Component
        </div>
    )
}
export default ListDisplay
