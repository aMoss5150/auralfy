import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useVibeId } from '../../../context/VibeContext'
import { deleteARelation, getAllRelations } from '../../../store/relations'
import { useChange } from '../../../context/ChangeContext'
import { usePlay } from '../../../context/PlayContext'

// import { getAllSongs } from '../../../store/songs'
// import { getAllVibes } from '../../../store/vibes'
import './Song.css'


function Song({ song }) {
    const [changed, setChanged] = useState(false)
    const { changeCtxt, setChangeCtxt } = useChange()
    const { playCtxt, setPlayCtxt } = usePlay()
    const dispatch = useDispatch()
    const { vibeIdCtxt } = useVibeId()
    const songs = useSelector(state => state.songs)


    const handleRemoveSong = async (e, songId) => {
        e.stopPropagation()
        await dispatch(deleteARelation(vibeIdCtxt, songId))
        // .then(() => dispatch(getAllRelations()))
        setChangeCtxt(!changeCtxt)
    }

    // useEffect(() => {
    //     dispatch(getAllRelations())
    // }, [])

    if (!song) return null
    // if (!vibeId) return null

    return (
        <div className="song__container">
            <i class="icons fas fa-compact-disc" onClick={() => { return (setPlayCtxt(song), console.log(playCtxt)) }}></i>
            {vibeIdCtxt && <i class="icons fas fa-minus-square" onClick={(e) => { return (handleRemoveSong(e, song.id), setChangeCtxt(!changeCtxt)) }}></i>}
            {/* <i class="fas fa-trash"></i> */}
            {/* <i class="fas fa-minus-circle"></i> */}
            {/* <i class="fas fa-minus"></i> */}
            <div className="songartist font-bold font-xl">
                {song.name} -
            </div>
            <div className="songnamealbum font-thin">
                "{song.artist}" - "{song?.album_name}"
            </div>
            {/* <i class="fas fa-minus-circle"></i> */}
            {/* <button className={`removesong font-medium ${!vibeIdCtxt ? "hidden" : ""}`} onClick={(e) => { return (handleRemoveSong(e, song.id), setChangeCtxt(!changeCtxt)) }}> */}
            {/* -del */}
            {/* </button> */}

            {/* <button onClick={() => { return (setPlayCtxt(song), console.log(playCtxt)) }}> */}
            {/* -add to Player */}
            {/* </button> */}

        </div>
    )
}

export default Song
