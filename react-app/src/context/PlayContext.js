import React, { createContext, useState, useContext } from 'react'

export const PlayContext = createContext()

export const PlayProvider = (props) => {

    // const [playCtxt, setPlayCtxt] = useState("https://song-storage-5150.s3.amazonaws.com/auralfy-music/05+-+A+Tale+of+2+Citiez+%5BExplicit%5D.mp3")
    const [playCtxt, setPlayCtxt] = useState("https://song-storage-5150.s3.amazonaws.com/auralfy-music/01+-+I+Got+The....mp3")

    return (
        <PlayContext.Provider value={{ playCtxt, setPlayCtxt }}>
            {props.children}
        </PlayContext.Provider>
    )
}

export const usePlay = () => {
    return useContext(PlayContext)
}