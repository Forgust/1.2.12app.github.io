import { Component } from "react";
import "./task-list.css";
import Task from "../task";

export default class TaskList extends Component {
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

    switch (filter) {
      case "Active":
        elements = todos.map((item) => {
          if (!item.completed) {
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
          }
        });
        break;
      case "Completed":
        elements = todos.map((item) => {
          if (item.completed) {
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
          }
        });
        break;
      case "All":
        elements = todos.map((item) => {
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
        });
        break;
      default:
        throw new Error("Incorrect filter");
    }

    return <ul className="todo-list">{elements}</ul>;
  }
}
