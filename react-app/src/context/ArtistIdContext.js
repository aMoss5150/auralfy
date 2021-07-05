import React, { createContext, useState, useContext } from 'react'

export const ArtistIdContext = createContext()

export const ArtistIdProvider = (props) => {

    const [artistIdCtxt, setArtistIdCtxt] = useState(null)

    return (
        <ArtistIdContext.Provider value={{ artistIdCtxt, setArtistIdCtxt }}>
            {props.children}
        </ArtistIdContext.Provider>
    )
}

export const useArtistId = () => {
    return useContext(ArtistIdContext)
}