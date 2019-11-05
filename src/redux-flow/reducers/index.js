'use strict'

import { combineReducers } from 'redux'
import reducerTodo from "./todos";
import reducerVisibilityFilter from './visibility-filter';

//const rootReducer = (state = {}, action) => {
//  return {
//    todos: reducerTodo(state.todos, action),
//    visibilityFilter: reducerVisibilityFilter(state.visibilityFilter, action)
//  }
//}

export default combineReducers({
  todos: reducerTodo,
  visibilityFilter: reducerVisibilityFilter
})
