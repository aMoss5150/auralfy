// actions
const GET_RELATIONS = "relations/GET_RELATIONS"


// action creators
const getRelations = (relations) => ({
    type: GET_RELATIONS,
    payload: relations,
})



// thunks

export const getAllRelations = () => async (dispatch) => {
    let relations = await fetch('/api/relations/')
    relations = await relations.json()
    if (relations.errors) {
        return
    }
    const relationObj = {}
    relations['relations'].forEach((relation, i) => {
        let relationArr = relation['members']
        // let song = relations['songs'][i]?.id
        // console.log(song)
        if (!relationObj[relationArr[0]]) {
            relationObj[relationArr[0]] = [relationArr[1]]
        }
        else {
            relationObj[relationArr[0]] = [...relationObj[relationArr[0]], relationArr[1]]
        }
    })

    await dispatch(getRelations(relationObj))
}

export const deleteARelation = (vibeId, songId) => async (dispatch) => {
    let body = JSON.stringify({ "vibeId": vibeId, "songId": songId })
    let del = await fetch('/api/relations/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    })
    del = await del.json()
    if (del.errors) {
        return
    }
    // await dispatch(getAllRelations())
}

export const createARelation = (vibeId, songId) => async (dispatch) => {
    let body = JSON.stringify({ "vibeId": vibeId, "songId": songId })
    let post = await fetch('/api/relations/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    })
    post = await post.json()
    if (post.errors) {
        return
    }
    // await dispatch(getAllRelations())
}

// initial state

let initialState = []

// reducer

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_RELATIONS: {
            const newState = [action.payload]
            return newState
        }
        default:
            return state
    }
}