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
    console.log(artistIdCtxt, songs)
    if (!songs) return null
    return (

        <div className="artistsongspage__container">
            artistsongspage test
            {songs.map((song) => (
                console.log(song),
                <li> {song.name}</li>
            ))
            }
        </div >
    )
}

export default ArtistSongsPage
