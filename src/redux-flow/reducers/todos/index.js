'use strict'

const initialValue = []

const todos = (state = initialValue, action) => {
 return state.concat({
  id: action.payload.id,
  text: action.payload.text,
  completed: false
 })

}

export default todos
