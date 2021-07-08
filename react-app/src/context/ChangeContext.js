import React, { createContext, useState, useContext } from 'react'

export const ChangeContext = createContext()

export const ChangeProvider = (props) => {

    const [changeCtxt, setChangeCtxt] = useState(false)

    return (
        <ChangeContext.Provider value={{ changeCtxt, setChangeCtxt }}>
            {props.children}
        </ChangeContext.Provider>
    )
}

export const useChange = () => {
    return useContext(ChangeContext)
}