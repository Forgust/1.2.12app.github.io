import React from 'react'
import './footer.css'
import PropTypes from 'prop-types'

import TaskFilter from '../task-filter'

function Footer({ count, changeFilter, filter, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <TaskFilter changeFilter={changeFilter} filter={filter} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.defaultProps = {
  count: 0,
  changeFilter: () => {},
  clearCompleted: () => {},
  filter: 'All',
}

Footer.propTypes = {
  count: PropTypes.number,
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
  clearCompleted: PropTypes.func,
}
export default Footer
