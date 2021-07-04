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
    dispatch(getRelations(relationObj))

}

// initial state

let initialState = []

// reducer

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_RELATIONS: {
            const newState = [...state, action.payload]
            return newState
        }
        default:
            return state
    }
}