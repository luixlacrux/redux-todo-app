import React, { PropTypes } from 'react'
import Checkbox from './Checkbox'
import '../styles/components/Todo.css'

const Todo = ({ onClick, onDelete, completed, text }) => (
  <li className={completed ? 'Todo completed' : 'Todo' }>
    <Checkbox {...{ onClick, completed }}/>
    <span className="Todo-text">{text}</span>
    <span
      className="Todo-button material-icons"
      onClick={onDelete}
      >
        delete_forever
    </span>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo
