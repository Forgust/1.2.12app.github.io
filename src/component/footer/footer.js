import "./footer.css";
import TaskFilter from "../task-filter";

const Footer = ({ count, changeFilter, filter, clearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <TaskFilter changeFilter={changeFilter} filter={filter} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
