import React, { createContext, useState, useContext } from 'react'

export const VibeIdContext = createContext()

export const VibeIdProvider = (props) => {

    const [vibeIdCtxt, setVibeIdCtxt] = useState(null)

    return (
        <VibeIdContext.Provider value={{ vibeIdCtxt, setVibeIdCtxt }}>
            {props.children}
        </VibeIdContext.Provider>
    )
}

export const useVibeId = () => {
    return useContext(VibeIdContext)
}