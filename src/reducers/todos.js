import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO
} from '../actions'

const todo = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        text: action.text,
        completed: false,
      }
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        todo(state, action),
        ...state,
      ]
    case TOGGLE_TODO:
      return state.map(t => todo(t, action))
    case DELETE_TODO:
      return state.filter(t => t.id !== action.id)

    default:
      return state
  }
}

export default todos
