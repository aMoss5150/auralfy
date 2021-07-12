import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Particles from 'react-particles-js'
import ParticleField from 'react-particles-webgl';
import Field, { config } from './ParticleConfig'
// import { THREE } from 'three'


import './ArtistPage.css'
import { getAllSongs } from "../../store/songs"
import ArtistPreview from './ArtistPreview/ArtistPreview'
import ArtistSongsPage from './ArtistSongsPage/ArtistSongsPage'
import { useArtistId } from '../../context/ArtistIdContext'






function ArtistPage() {
    const { artistIdCtxt, setArtistIdCtxt } = useArtistId()
    let set = new Set()
    let currentArtist
    const dispatch = useDispatch()
    let songs = Object.values(useSelector(state => state.songs))
    // useEffect(() => {
    //     return () => ParticleField.destroy()
    // }, [])
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
