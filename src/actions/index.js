import { ADD_TODO } from '../constants'

function addTodo(todoText) {
    return {
        type: ADD_TODO,
        payload: {
            todoText
        }
    }
}

export { addTodo }