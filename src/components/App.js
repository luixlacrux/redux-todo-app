import React from 'react'
import Tags from './Tags'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import '../styles/components/App.css'

const App = () => (
  <section className="App">
    <h1>Todo</h1>
    <div className="App-container">
      <AddTodo />
      <Tags />
      <VisibleTodoList />
    </div>
  </section>
)

export default App
