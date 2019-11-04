'use strict'

export const initalState = 'SHOW_ALL'

const visibilityFilter = (state = initalState, action) => {
  switch(action.type) {
  case 'SET_VISIBILITY_FILTER':
    return action.payload.filter
  default:
    return state
  }
}

export default visibilityFilter
