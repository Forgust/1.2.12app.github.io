import { Component } from "react";
import "./task-filter.css";

export default class TaskFilter extends Component {
  render() {
    const { filter, changeFilter } = this.props;

    return (
      <ul className="filters">
        <li>
          <button
            onClick={() => {
              changeFilter("All");
            }}
            className={filter === "All" ? "selected" : null}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              changeFilter("Active");
            }}
            className={filter === "Active" ? "selected" : null}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              changeFilter("Completed");
            }}
            className={filter === "Completed" ? "selected" : null}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
