import { TOGGLE_TODO, toggleTodo } from '../index'

describe('action toogleTodo', () => {
  it('should create an action to toggle todo', () => {
    const id = 1
    const expectedAction = {
      type: TOGGLE_TODO,
      id
    }
    expect(toggleTodo(id)).toEqual(expectedAction)
  })
})
