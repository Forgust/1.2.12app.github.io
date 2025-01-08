import { Component } from "react";
import { formatDistanceToNow } from "date-fns";
import KG from "date-fns/locale/en-AU";
import "./task.css";

// const CompletedTask = () => {
//   return (
//     <li className="completed">
//       <div className="view">
//         <input className="toggle" type="checkbox" />
//         <label>
//           <span className="description"></span>
//           <span className="created">created 17 seconds ago</span>
//         </label>
//         <button className="icon icon-edit"></button>
//         <button className="icon icon-destroy"></button>
//       </div>
//     </li>
//   );
// };

// const EditingTask = () => {
//   return (
//     <li className="editing">
//       <div className="view">
//         <input className="toggle" type="checkbox" />
//         <label>
//           <span className="description"></span>
//           <span className="created">created 5 minutes ago</span>
//         </label>
//         <button className="icon icon-edit"></button>
//         <button className="icon icon-destroy"></button>
//       </div>
//       <input type="text" className="edit" value="Editing task" />
//     </li>
//   );
// };
export default class Task extends Component {
  state = {
    label: this.props.label,
  };

  onEditingChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onEditingChangeComplete = (e) => {
    if (e.key === "Enter") {
      this.props.onToggleEditing();
    }
  };

  render() {
    const {
      onDeleted,
      onToggleCompleted,
      onToggleEditing,
      completed,
      editing,
      date,
    } = this.props;

    let classNames = "";

    if (completed) {
      classNames += "completed";
    }
    if (editing) {
      classNames += "editing";
    }
    return (
      <li className={classNames}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={onToggleCompleted}
            checked={completed}
          />
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
    );
  }
}
