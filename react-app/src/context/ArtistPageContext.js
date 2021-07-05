import React, { createContext, useState, useContext } from 'react'

export const ArtistPageContext = createContext()

export const ArtistPageProvider = (props) => {

    const [artistPageCtxt, setArtistPageCtxt] = useState(true)

    return (
        <ArtistPageContext.Provider value={{ artistPageCtxt, setArtistPageCtxt }}>
            {props.children}
        </ArtistPageContext.Provider>
    )
}

export const useArtistPage = () => {
    return useContext(ArtistPageContext)
}