import { ADD_TODO, REMOVE_TODO } from '../constants'

function addTodo(todoText) {
    return {
        type: ADD_TODO,
        payload: {
            todoText
        }
    }
}

function removeTodo(index) {
    return {
        type: REMOVE_TODO,
        payload: {
            index
        }
    }
}

export { addTodo, removeTodo }