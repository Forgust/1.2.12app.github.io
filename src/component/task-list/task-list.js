import "./task-list.css";
import { CompletedTask, EditingTask, Task } from "../task";

const TodoList = () => {
  return (
    <ul className="todo-list">
      <CompletedTask />
      <EditingTask />
      <Task />
    </ul>
  );
};

export default TodoList;
