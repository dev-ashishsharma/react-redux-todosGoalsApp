import React, { Component } from 'react';
import { connect } from 'react-redux'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import {
  handleInitialData
} from '../actions/shared'



class App extends React.Component {
  componentDidMount () {
    const {dispatch} = this.props

    // Promise.all([
    //   API.fetchTodos(),
    //   API.fetchGoals(),
    // ]).then(([todos, goals]) => {
    //   store.dispatch(receiveDataAction(todos, goals))
    // })
    dispatch(handleInitialData())
    // store.subscribe(() => {
    //   // ANTI PATTERN, React. Since no State
    //   // setState cannot be used. This will forceUpdate
    //   // and its a method availbale for all child components
    //   //
    //   return this.forceUpdate()
    // })
  }
  render () {
    // const {store} = this.props
    // const {loading} = store.getState()
    if (this.props.loading === true) {
      return <h3>Loading...</h3>
    }
    return (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)
