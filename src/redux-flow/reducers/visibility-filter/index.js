'use strict'

import { SET_VISIBILITY_FILTER, SHOW_ALL } from './actions'
import createReducers from '../create-reducers'

export const initialState = SHOW_ALL

const visibilityFilter = createReducers(initialState, {
  [SET_VISIBILITY_FILTER]: (state, action) => action.payload.filter
})

export default visibilityFilter
