import { ADD_TODO, REMOVE_TODO } from '../constants'

function reducer(state = [], action) {
    if (action.type === ADD_TODO) {
        return [...state, action.payload.todoText]
    }
    
    if (action.type === REMOVE_TODO) {
        const { index } = action.payload
        return [...state.slice(0, index), ...state.slice(index + 1)]
    }

    return state
}

export default reducer