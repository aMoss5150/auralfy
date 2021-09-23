import React, { createContext, useState, useContext } from 'react'

export const VisualizerContext = createContext()

export const VisualizerProvider = (props) => {

    const [visualizerCtxt, setVisualizerCtxt] = useState(0)

    return (
        <VisualizerContext.Provider value={{ visualizerCtxt, setVisualizerCtxt }}>
            {props.children}
        </VisualizerContext.Provider>
    )
}

export const useVisualizer = () => {
    return useContext(VisualizerContext)
}