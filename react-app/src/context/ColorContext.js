import React, { createContext, useState, useContext } from 'react'

export const ColorContext = createContext()

export const ColorProvider = (props) => {

    const [colorCtxt, setColorCtxt] = useState(false)

    return (
        <ColorContext.Provider value={{ colorCtxt, setColorCtxt }}>
            {props.children}
        </ColorContext.Provider>
    )
}

export const useColor = () => {
    return useContext(ColorContext)
}