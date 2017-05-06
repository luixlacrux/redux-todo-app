import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import '../styles/containers/AddTodo.css'

let AddTodo = ({ dispatch }) => {
  let input

  const onSubmit = (e) => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }

    dispatch(addTodo(input.value))
    input.value = ''
  }

  return (
    <form className="AddTodo" onSubmit={onSubmit}>
      <div className="AddTodo-group">
        <input className="input" ref={node => input = node} placeholder="Create Some Tasks ..." />
        <button className="button" type="submit">
          <i className="material-icons">add</i>
        </button>
      </div>
    </form>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
