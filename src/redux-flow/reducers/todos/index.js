'use strict'
import { ADD_TODO, TOGGLE_TODO } from './actions.js'

export const initialValue = []

const todos = createReducer(initialValue, {
  [ADD_TODO]: (state, action) => state.concat({
      id: action.payload.id,
      text: action.payload.text,
      completed: false
    }),

  [TOGGLE_TODO]: (state, action) => state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed
        }
      })
})

export default todos
