import { ADD_TODO } from '../constants'

function addTodo(state = [], action) {
    if (action.type === ADD_TODO) {
        return [...state, action.payload.todoText]
    }
    return state
}

export default addTodo