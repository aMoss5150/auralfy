// actions
const GET_VIBES = "songs/GET_VIBES"

// action creators
const getVibes = (vibes) => ({
    type: GET_VIBES,
    payload: vibes,
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

// initial state

let initialState = {}

// reducer

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_VIBES: {
            const newState = { ...state }
            Object.values(action.payload).forEach((vibe) => {
                newState[vibe.id] = vibe
            })
        }
        default:
            return state
    }
}