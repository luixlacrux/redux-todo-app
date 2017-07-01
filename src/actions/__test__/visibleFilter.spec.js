import { SET_VISIBILITY_FILTER, setVisibilityFilter } from '../index'

describe('action setVisibilityFilter', () => {
  it('should create an action to filter todo', () => {
    const filter = 'SHOW_ALL'
    const expectedAction = {
      type: SET_VISIBILITY_FILTER,
      filter
    }
    expect(setVisibilityFilter(filter)).toEqual(expectedAction)
  })
})
