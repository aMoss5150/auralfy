import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './ArtistPage.css'
import { getAllSongs } from "../../store/songs"

function ArtistPage() {
    let currentArtist
    const dispatch = useDispatch()
    let songs = Object.values(useSelector(state => state.songs))
    let set = new Set()
    if (!songs) return null
    return (
        <div className="artistpage__container">
            {
                songs.map((song) => {
                    {
                        currentArtist = song.artist
                        return (!set.has(song.artist) && song.artist && set.add(song.artist) &&
                            < li >
                                {song.artist}
                                {songs.map((song) => {
                                    {
                                        if (song.artist === currentArtist) {
                                            return (

                                                <li style={{ listStyle: 'none' }}>
                                                    {song.name}
                                                </li>
                                            )
                                        }
                                    }
                                })}
                            </li>

                        )
                    }
                })
            }
        </div >
    )
}

export default ArtistPage
