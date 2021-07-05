import React from 'react'
import { useSelector } from 'react-redux'
import './ArtistSongsPage.css'
import { useArtistId } from '../../../context/ArtistIdContext'

function ArtistSongsPage() {

    let songs = Object.values(useSelector(state => state.songs))
    const { artistIdCtxt, setArtistIdCtxt } = useArtistId()
    songs = songs?.filter((song) => (
        song.artist === artistIdCtxt

    ))
    if (!songs) return null
    return (

        <div className="artistsongspage__container headers__colors2">
            {artistIdCtxt}
            {songs.map((song) => (

                <li key={song.id}> {song.name}</li>
            ))
            }
        </div >
    )
}

export default ArtistSongsPage
