import React from 'react'
import { connect } from 'react-redux'
import List from './Lists'
import {
  handleAddGoal,
  handleDeleteGoal
} from '../actions/goals'

class Goals extends React.Component {
  addItem = (e) => {
    e.preventDefault()
    this.props.dispatch(handleAddGoal(
      this.input.value,
      () => this.input.value = ''
    ))
    // return API.saveGoal(this.input.value)
    //   .then((goal) => {
    //     this.props.store.dispatch(addGoalAction(goal))
    //     this.input.value =''
    //   })
    //   .catch(() => alert('Please try again'))
    // const name = this.input.value
    // this.input.value = ''
    //
    // this.props.store.dispatch(addGoalAction({
    //   name,
    //   id: generateId()
    // }))
  }

  removeItem =(goal) => {
     this.props.dispatch(handleDeleteGoal(goal))
     // this.props.dispatch(removeGoal(goal.id))

     // return API.deleteGoal(goal.id)
     //   .catch(() => {
     //     this.props.dispatch(addGoal(goal))
     //     alert('An Error Occured. Please try again.')
     //   })
  }
  render() {
    return (
      <div>
        <h1>Goals</h1>
        <input
          type='text'
          placeholder='Add Goal'
          ref={(input) => this.input = input }
        />
        <button onClick={this.addItem}>Add Goal</button>
      <List
        items={this.props.goals}
        remove={this.removeItem}/>
      </div>
    )
  }
}

export default connect((state) => ({
  goals: state.goals
}))(Goals)
