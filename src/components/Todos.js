import React from 'react'
import { connect } from 'react-redux'
import List from './Lists'
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle
} from '../actions/todos'

class Todos extends React.Component {
  addItem = (e) => {
    e.preventDefault()

    this.props.dispatch(handleAddTodo(
      this.input.value,
      () => this.input.value =''))

    // this.props.store.dispatch(handleTodoAction(todo))
    // return API.saveTodo(this.input.value)
    //   .then((todo) => {
    //     this.props.store.dispatch(addTodoAction(todo))
    //     this.input.value = ''
    //   })
    //   .catch(() => alert('Sorry. Try Again!!'))
    // const name = this.input.value
    // this.input.value = ''
    //
    // this.props.store.dispatch(addTodoAction({
    //   name,
    //   complete : false,
    //   id: generateId()
    // }))
  }

  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo))
     // this.props.store.dispatch(removeTodoAction(todo.id))
     //
     // return API.deleteTodo(todo.id)
     //   .catch(() => {
     //     this.props.store.dispatch(addTodoAction(todo))
     //     alert('An Error Occured. Please try again.')
     //   })
  }

  toggleItem = (id) => {
    this.props.dispatch(handleToggle(id))

    // return API.saveTodoToggle(id)
    //   .catch(() => {
    //     this.props.store.dispatch(toggleTodoAction(id))
    //     alert('An error occured. Please try again!!')
    //   })
  }
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type='text'
          placeholder='Add Todod'
          ref={(input) => this.input = input }
        />
        <button onClick={this.addItem}>Add Todo</button>
      <List
        toggle ={this.toggleItem}
        items={this.props.todos}
        remove = {this.removeItem}/>
      </div>
    )
  }
}

export default connect((state) => ({
  todos: state.todos
}))(Todos)
