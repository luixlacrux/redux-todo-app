import { DELETE_TODO, deleteTodo } from '../index'

describe('action deleteTodo', () => {
  it('should create an action to delete a todo', () => {
    const id = 1
    const expectedAction = {
      type: DELETE_TODO,
      id
    }
    expect(deleteTodo(id)).toEqual(expectedAction)
  })
})
