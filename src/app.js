import React, { Component } from 'react'

import './app.css'

import Footer from './component/footer'
import NewTaskForm from './component/new-task-form'
import TaskList from './component/task-list'

export default class App extends Component {
  maxId = 100
  state = {
    todoData: [],
    filter: 'All',
  }

  createDataItem(text) {
    return {
      label: text,
      editing: false,
      completed: false,
      id: this.maxId++,
      date: new Date(),
    }
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id)
    const oldItem = arr[idx]
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
  }

  deleteTask = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]

      return {
        todoData: newArray,
      }
    })
  }

  onTaskAdd = (text) => {
    this.setState(({ todoData }) => {
      const newArray = [...todoData, this.createDataItem(text)]

      return {
        todoData: newArray,
      }
    })
  }

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'completed'),
      }
    })
  }

  onToggleEditing = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'editing'),
      }
    })
  }

  changeFilter = (text) => {
    this.setState({
      filter: text,
    })
  }

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((el) => !el.completed)
      return {
        todoData: newArr,
      }
    })
  }

  render() {
    const { todoData, filter } = this.state
    const completedArr = todoData.filter((el) => !el.completed)
    const count = completedArr.length

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onTaskAdd={this.onTaskAdd} />
        </header>
        <section className="main">
          <TaskList
            todos={todoData}
            onDeleted={this.deleteTask}
            onSave={this.save}
            onToggleCompleted={this.onToggleCompleted}
            onToggleEditing={this.onToggleEditing}
            filter={filter}
          />
          <Footer count={count} changeFilter={this.changeFilter} filter={filter} clearCompleted={this.clearCompleted} />
        </section>
      </section>
    )
  }
}
