import { Component } from "react";
import "./task-list.css";
import Task from "../task";
import PropTypes from "prop-types";

export default class TaskList extends Component {
  static defaultProps = {
    onDeleted: () => {},
    onSave: () => {},
    onToggleCompleted: () => {},
    onToggleEditing: () => {},
    filter: "All",
  };

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    filter: PropTypes.string,
    onDeleted: PropTypes.func,
    onSave: PropTypes.func,
    onToggleCompleted: PropTypes.func,
    onToggleEditing: PropTypes.func,
  };

  render() {
    const {
      todos,
      onDeleted,
      onSave,
      onToggleCompleted,
      onToggleEditing,
      filter,
    } = this.props;

    let elements = [];

    const taskWithProps = (item) => {
      return (
        <Task
          date={item.date}
          label={item.label}
          key={item.id}
          completed={item.completed}
          editing={item.editing}
          onDeleted={() => onDeleted(item.id)}
          onSave={() => onSave(item.id)}
          onToggleCompleted={() => {
            onToggleCompleted(item.id);
          }}
          onToggleEditing={() => {
            onToggleEditing(item.id);
          }}
        />
      );
    };

    switch (filter) {
      case "Active":
        elements = todos.map((item) => {
          if (!item.completed) {
            return taskWithProps(item);
          }
        });
        break;
      case "Completed":
        elements = todos.map((item) => {
          if (item.completed) {
            return taskWithProps(item);
          }
        });
        break;
      case "All":
        elements = todos.map((item) => {
          return taskWithProps(item);
        });
        break;
      default:
        throw new Error("Incorrect filter");
    }

    return <ul className="todo-list">{elements}</ul>;
  }
}
