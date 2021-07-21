import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Field from './ParticleConfig'

import './ArtistPage.css'
import ArtistPreview from './ArtistPreview/ArtistPreview'
import ArtistSongsPage from './ArtistSongsPage/ArtistSongsPage'
import { useArtistId } from '../../context/ArtistIdContext'

// *Field is the preconfigured packaged particle field built from 3 JS
// *this is the main page for navigating to all artist specific pages
function ArtistPage() {
    const dispatch = useDispatch()
    let songs = Object.values(useSelector(state => state.songs))
    const { artistIdCtxt, setArtistIdCtxt } = useArtistId()

    // *usage of a set to create the summation of all songs you have access to
    let set = new Set()

    // *declared
    let currentArtist
    if (!songs) return null

    return (
        <div className="artistpage__container">
            {artistIdCtxt !== null && <ArtistSongsPage />}
            {
                artistIdCtxt === null && songs.map((song) => {
                    {
                        currentArtist = song.artist
                        return (!set.has(song.artist) && song.artist && set.add(song.artist) &&
                            <div key={song.id} className="artist__parent" onClick={() => setArtistIdCtxt(song.artist)}>
                                <ArtistPreview song={song} />
                            </div>

                        )
                    }
                })
            }
            <Field />
        </div >
    )
}

export default ArtistPage
