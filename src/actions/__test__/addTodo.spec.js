import { ADD_TODO, addTodo } from '../index'

describe('action addTodo', () => {
  it('should create an action to add a todo', () => {
    const text = 'Creating test'
    const expectedAction = {
      type: ADD_TODO,
      text
    }
    expect(addTodo(text)).toEqual(expectedAction)
  })
})
