import React from 'react'
import FilterLink from '../containers/FilterLink'

const Tags = () => (
  <div>
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

export default Tags
