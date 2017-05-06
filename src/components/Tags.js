import React from 'react'
import { connect } from 'react-redux'
import FilterLink from '../containers/FilterLink'

let Tags = ({ isTodoLength }) => (
  <div
    style={{
      display: isTodoLength ? 'block' : 'none',
      marginBottom: '10px'
    }}
    >
      <FilterLink filter="SHOW_ALL" color="blue">
        Todos
      </FilterLink>
      <FilterLink filter="SHOW_ACTIVE" color="red">
        Pendientes
      </FilterLink>
      <FilterLink filter="SHOW_COMPLETED" color="green">
        Completados
      </FilterLink>
  </div>
)

const mapStateToProps = ({ todos }) => ({
  isTodoLength: todos.length > 0,
})

Tags = connect(
  mapStateToProps,
)(Tags)

export default Tags
