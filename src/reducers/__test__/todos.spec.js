import { ADD_TODO, addTodo } from '../../actions'
import todosReducer from '../todos'

describe('todos reducer', () => {
  it('should return an empty array', () => {
    expect(todosReducer(undefined, {})).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    const text = 'Run the tests'
    expect(
      todosReducer([], addTodo(text))
    ).toEqual([
      {
        id: 0,
        completed: false,
        text
      }
    ])

    expect(
      todosReducer(
        [
          {
            id: 0,
            completed: false,
            text: 'Use Redux'
          }
        ], addTodo(text))
      ).toEqual([
        {
          id: 1,
          completed: false,
          text
        },
        {
          id: 0,
          completed: false,
          text: 'Use Redux'
        }
      ])
  })
})
