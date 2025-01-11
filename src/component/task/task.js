import { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'
import KG from 'date-fns/locale/en-AU'
import './task.css'
export default class Task extends Component {
  static defaultProps = {
    date: new Date(),
  }

  static propTypes = {
    date: PropTypes.instanceOf(Date),
    completed: PropTypes.bool,
    editing: PropTypes.bool,
  }

  state = {
    label: this.props.label,
  }

  onEditingChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onEditingChangeComplete = (e) => {
    if (e.key === 'Enter') {
      this.props.onToggleEditing()
    }
  }

  render() {
    const { onDeleted, onToggleCompleted, onToggleEditing, completed, editing, date } = this.props

    let classNames = ''

    if (completed) {
      classNames += 'completed'
    }
    if (editing) {
      classNames += 'editing'
    }
    return (
      <li className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={onToggleCompleted} checked={completed} />
          <label onClick={onToggleCompleted}>
            <span className="description">{this.state.label}</span>
            <span className="created">{`created ${formatDistanceToNow(date, {
              includeSeconds: true,
              locale: KG,
              addSuffix: true,
            })}`}</span>
          </label>
          <button className="icon icon-edit" onClick={onToggleEditing}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <input
          type="text"
          className="edit"
          defaultValue={this.state.label}
          onChange={this.onEditingChange}
          onKeyDown={this.onEditingChangeComplete}
        />
      </li>
    )
  }
}
