import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class Todo extends React.Component {
    render() {
        const todos = this.props.todos.map((todo, i) => <li key={i}>{todo}</li>)

        return (
            <div style={{margin: '40px'}}>
                <input placeholder="new todo" ref='todoText'/>
                <button onClick={() => this.props.addTodo(this.refs.todoText.value)}>Add</button>
                <h1>todos</h1>
                <ul>
                    {todos}
                </ul>
                <h2>{this.props.todos.length} todos</h2>
            </div>)
    }
}

function mapStateToProps (state) {
    return {
      todos: state
    }
}

const mapDispatchToProps = (dispatch) => ({
    addTodo(text) {
        dispatch(addTodo(text))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)