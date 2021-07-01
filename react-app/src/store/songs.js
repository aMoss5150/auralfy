// actions
const GET_SONGS = "songs/GET_SONGS"

// action creators
const getSongs = (songs) => ({
    type: GET_SONGS,
    payload: songs,
})

// thunks

export const getAllSongs = () => async (dispatch) => {
    let songs = await fetch('/api/songs/')
    songs = await songs.json()
    if (songs.errors) {
        return
    }
    dispatch(getSongs(songs))

}

// initial state

let initialState = {}

// reducer

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_SONGS: {
            const newState = { ...state }
            Object.values(action.payload).forEach((song) => {
                newState[song.id] = song
            })
        }
        default:
            return state
    }
}