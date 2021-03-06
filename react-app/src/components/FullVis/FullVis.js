import React, { useEffect } from 'react'
import FullPlayer from '../FullPlayer/FullPlayer'
import CanvasF from '../VisualizerCC/CanvasF'
import { usePlay } from '../../context/PlayContext'
import { useSelector, useDispatch } from 'react-redux'
import { getAllSongs } from '../../store/songs'
import "./FullVis.css"

function FullVis() {
    const dispatch = useDispatch()
    const { playCtxt, setPlayCtxt, status, setStatus } = usePlay()
    const songs = useSelector(state => state.songs)

    useEffect(() => {
        dispatch(getAllSongs())
    }, [])

    return (
        <div className="fullplayer__parent">
            <CanvasF />
        </div>
    )
}

export default FullVis
