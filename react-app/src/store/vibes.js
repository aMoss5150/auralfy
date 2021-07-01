// actions
const GET_VIBES = "vibes/GET_VIBES"
const CREATE_VIBE = 'vibes/CREATE_VIBE'
const DELETE_VIBE = 'vibes/DELETE_VIBE'
const ADD_SONG = 'vibes/ADD_SONG'

// action creators
const getVibes = (vibes) => ({
    type: GET_VIBES,
    payload: vibes,
})

const createVibe = (newVibe) => ({
    type: CREATE_VIBE,
    payload: newVibe
})

const deleteVibe = (id) => ({
    type: DELETE_VIBE,
    payload: id
})

const addSong = (songId, vibeId) => ({
    type: ADD_SONG,
    payload: { songId, vibeId }
})

// thunks

export const getAllVibes = () => async (dispatch) => {
    let vibes = await fetch('/api/vibes/')
    vibes = await vibes.json()
    if (vibes.errors) {
        return
    }
    dispatch(getVibes(vibes))
}

export const createAVibe = (name) => async (dispatch) => {
    let body = JSON.stringify(name)
    let newVibe = await fetch('/api/vibes/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    })
    newVibe = await newVibe.json()
    if (newVibe.errors) {
        return
    }
    dispatch(createVibe(newVibe))
}

export const deleteAVibe = (id) => async (dispatch) => {
    let body = JSON.stringify(id)
    let del = await fetch('/api/vibes/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    })
    del = del.json()

    if (del.errors) {
        return
    }
    dispatch(deleteVibe(id))
}

// initial state

let initialState = {}

// reducer

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_VIBES: {
            const newState = { ...state }
            action.payload['vibes'].forEach((vibe) => {
                newState[vibe.id] = vibe
            })
            return newState
        }

        case CREATE_VIBE: {
            const newState = { ...state }
            console.log(action.payload)
            newState[action.payload["vibe"].id] = action.payload["vibe"]
            return newState
        }

        case DELETE_VIBE: {
            const newState = { ...state }
            delete newState[action.payload]
            return newState
        }
        default:
            return state
    }
}