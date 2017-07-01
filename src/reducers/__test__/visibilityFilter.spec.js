import { SET_VISIBILITY_FILTER, setVisibilityFilter } from '../../actions'
import reducer from '../visibilityFilter'

describe('visibilityFilter reducer', () => {
  it('should return a string SHOW_ALL', () => {
    expect(reducer(undefined, {})).toEqual('SHOW_ALL')
  })

  it('should handle SET_VISIBILITY_FILTER', () => {
    expect(
      reducer(undefined, setVisibilityFilter('SHOW_COMPLETED'))
    ).toEqual('SHOW_COMPLETED')
  })
})
