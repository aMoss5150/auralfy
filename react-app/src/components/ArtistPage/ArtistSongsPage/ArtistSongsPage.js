import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './ArtistSongsPage.css'
import { useArtistId } from '../../../context/ArtistIdContext'
import { createARelation } from '../../../store/relations'

export default function ArtistSongsPage() {
    const dispatch = useDispatch()
    // *access reducers
    let songs = Object.values(useSelector(state => state.songs))
    const vibes = Object.values(useSelector(state => state.vibes))

    // *context
    const { artistIdCtxt, setArtistIdCtxt } = useArtistId()

    // *state 
    const [songToAdd, setSongToAdd] = useState(null)
    const [openAdder, setOpenAdder] = useState(false)

    // *matching artist to their songs based on context
    // *and the selected artist
    songs = songs?.filter((song) => (
        song.artist === artistIdCtxt
    ))

    // *using this to isolate and grab a single song
    let song1 = songs[0]
    const handleAddSongToVibe = (songId, vibeId) => {
        dispatch(createARelation(songId, vibeId))
    }
    if (!songs) return null
    return (
        <div className="artistsongspage__container headers__colors2 font-bold">
            <img src={song1?.image} alt="" style={{ height: "250px", borderRadius: "1px" }} />
            <div className="artist__name font-thin">
                {artistIdCtxt}
            </div>

            {
                openAdder && songToAdd && vibes.map((vibe) => (
                    <div key={vibe.id} className="artistsong fromalbum font-thin adder" onClick={() => handleAddSongToVibe(vibe.id, songToAdd.id)}>
                        add <span className="font-bold">{songToAdd.name}</span> to #<span className="f">{vibe.name}</span>
                    </div>
                ))
            }


            {
                openAdder &&
                <i onClick={() => { return (setOpenAdder(false), setSongToAdd(null)) }} className="icons fas fa-angle-double-left"></i>
            }


            {
                !openAdder && songs.map((song) => (
                    <li key={song.id} className="artistsong">
                        <i className="icons fas fa-plus" onClick={() => { return (setOpenAdder(true), setSongToAdd(song)) }}></i>
                        <span>{song.name}</span>

                        <span
                            className="fromalbum font-thin">
                            &nbsp;from the album&nbsp;
                        </span>

                        <span>
                            {song?.album_name}
                        </span>

                        {/* <span
                            className="fromalbum font-thin">
                            &nbsp;Tempo at:&nbsp;{song.tempo} BPM
                        </span> */}
                    </li>
                ))
            }


            {
                !openAdder &&
                <i onClick={() => { return (setArtistIdCtxt(null)) }} className="icons fas fa-angle-double-left"></i>
            }

        </div >
    )
}

