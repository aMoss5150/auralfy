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

        <div className="artistsongspage__container headers__colors2 font-bold">
            <div className="artist__name font-thin">
                {artistIdCtxt}
            </div>
            {songs.map((song) => (
                <li key={song.id}> <span>{song.name}</span><span className="fromalbum font-thin"> from the album </span><span>{song?.album_name}</span> <span className="font-thin"><button className="fromalbum font-thin">-add to vibe</button></span></li>
            ))
            }
        </div >
    )
}

export default ArtistSongsPage
