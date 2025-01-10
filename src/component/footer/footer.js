import "./footer.css";
import TaskFilter from "../task-filter";
import PropTypes from "prop-types";

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

Footer.defaultProps = {
  count: 0,
  changeFilter: () => {},
  clearCompleted: () => {},
  filter: "All",
};

Footer.propTypes = {
  count: PropTypes.number,
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
  clearCompleted: PropTypes.func,
};
export default Footer;
