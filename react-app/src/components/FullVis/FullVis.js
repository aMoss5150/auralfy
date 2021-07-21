import React, { useEffect } from 'react'
import FullPlayer from '../FullPlayer/FullPlayer'
import { usePlay } from '../../context/PlayContext'
import { useSelector, useDispatch } from 'react-redux'
import { getAllSongs } from '../../store/songs'

function FullVis() {
    const dispatch = useDispatch()
    const { playCtxt, setPlayCtxt, status, setStatus } = usePlay()
    const songs = useSelector(state => state.songs)

    useEffect(() => {
        dispatch(getAllSongs())
    }, [])

    return (
        <div className="player__parent">
            <button onClick={() => setPlayCtxt(songs[1])}>LOAD</button>
            <FullPlayer />
        </div>
    )
}

export default FullVis
