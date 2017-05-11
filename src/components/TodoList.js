import React from 'react'
import PropTypes from 'prop-types'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onDeleteTodo }) => (
  <ul style={{
    display: todos.length ? 'block' : 'none'
  }}>
    <CSSTransitionGroup
      transitionName="Todo"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
          onDelete={() => onDeleteTodo(todo.id)}
        />
      )}
    </CSSTransitionGroup>
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

export default TodoList
