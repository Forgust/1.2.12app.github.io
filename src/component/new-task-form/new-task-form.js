import { Component } from 'react'
import './new-task-form.css'

export default class NewTaskForm extends Component {
  state = {
    label: '',
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    if (e.key === 'Enter') {
      this.props.onTaskAdd(this.state.label)
      this.setState({
        label: '',
      })
    }
  }

  render() {
    return (
      <input
        value={this.state.label}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={this.onLabelChange}
        onKeyDown={this.onSubmit}
      />
    )
  }
}
