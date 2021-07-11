import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './ArtistSongsPage.css'
import { useArtistId } from '../../../context/ArtistIdContext'
import { createARelation } from '../../../store/relations'

function ArtistSongsPage() {
    const dispatch = useDispatch()
    let songs = Object.values(useSelector(state => state.songs))
    const { artistIdCtxt, setArtistIdCtxt } = useArtistId()
    const [songToAdd, setSongToAdd] = useState(null)
    const vibes = Object.values(useSelector(state => state.vibes))
    const [openAdder, setOpenAdder] = useState(false)
    songs = songs?.filter((song) => (
        song.artist === artistIdCtxt

    ))

    let song1 = songs[0]

    const handleAddSongToVibe = (songId, vibeId) => {
        dispatch(createARelation(songId, vibeId))
    }
    if (!songs) return null
    return (

        <div className="artistsongspage__container headers__colors2 font-bold">
            <img src={song1?.image} alt="" style={{ height: "250px" }} />
            <div className="artist__name font-thin">
                {artistIdCtxt}
            </div>
            {openAdder && songToAdd && vibes.map((vibe) => (
                <div key={vibe.id} className="artistsong fromalbum font-thin adder" onClick={() => handleAddSongToVibe(vibe.id, songToAdd.id)}>
                    add <span className="font-bold">{songToAdd.name}</span> to #<span className="f">{vibe.name}</span>
                </div>
            ))}
            {openAdder &&
                <i onClick={() => { return (setOpenAdder(false), setSongToAdd(null)) }} className="fas fa-window-close"></i>
            }
            {!openAdder && songs.map((song) => (
                <li key={song.id} className="artistsong">
                    <i class="icons fas fa-plus-circle" onClick={() => { return (setOpenAdder(true), setSongToAdd(song)) }}></i>
                    {/* <i class="fas fa-chevron-circle-down"></i> */}
                    <span>{song.name}</span>
                    <span
                        className="fromalbum font-thin">
                        &nbsp;from the album&nbsp;
                    </span> <span>
                        {song?.album_name}
                    </span>
                    <span className="font-thin">
                        {/* <button onClick={() => { return (setOpenAdder(true), setSongToAdd(song)) }} */}
                        {/* className="fromalbum font-thin"> */}
                        {/* &nbsp;-add to my vibes */}
                        {/* </button> */}
                    </span>
                </li>
            ))
            }
            {!openAdder &&
                <i onClick={() => { return (setArtistIdCtxt(null)) }} className="icons fas fa-window-close"></i>

            }
        </div >


    )
}

export default ArtistSongsPage
