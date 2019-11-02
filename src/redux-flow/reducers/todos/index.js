'use strict'
import { ADD_TODO, TOGGLE_TODO } from './actions.js'

export const initialValue = []

const todos = (state = initialValue, action) => {
 switch (action.type) {
  case ADD_TODO:
    return state.concat({
      id: action.payload.id,
      text: action.payload.text,
      completed: false
    })
  case TOGGLE_TODO:
    return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed
        }
      })
  }

  return state

}

export default todos
