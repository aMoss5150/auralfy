import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useVibeId } from '../../../context/VibeContext'
import { deleteARelation, getAllRelations } from '../../../store/relations'
import { useChange } from '../../../context/ChangeContext'

// import { getAllSongs } from '../../../store/songs'
// import { getAllVibes } from '../../../store/vibes'
import './Song.css'


function Song({ song }) {
    const [changed, setChanged] = useState(false)
    const { changeCtxt, setChangeCtxt } = useChange()
    const dispatch = useDispatch()
    const { vibeIdCtxt } = useVibeId()
    const songs = useSelector(state => state.songs)


    const handleRemoveSong = (songId) => {
        console.log(vibeIdCtxt, songId);
        dispatch(deleteARelation(vibeIdCtxt, songId))
        setChangeCtxt(!changeCtxt)
    }

    useEffect(() => {
        dispatch(getAllRelations())
    }, [changeCtxt])

    if (!song) return null
    // if (!vibeId) return null

    return (
        <div className="song__container">
            <div className="songartist font-bold font-xl">
                {song.name} -
            </div>
            <div className="songnamealbum font-thin">
                "{song.artist}" - "{song?.album_name}"
            </div>
            <button className={`removesong font-medium ${!vibeIdCtxt ? "hidden" : ""}`} onClick={() => handleRemoveSong(song.id)}>
                -del
            </button>

        </div>
    )
}

export default Song
