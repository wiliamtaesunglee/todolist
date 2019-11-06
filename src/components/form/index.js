'use strict'

import { addTodo } from '../../redux-flow/reducers/todos/action-creators'
import React from 'react'
import { connect } from 'react-redux'

export const Form = ({handleAddTodo}) => (
  <form onSubmit={handleAddTodo}>
    <input type='text' name='todo'/>
    <button type='submit'>Adicionar</button>
  </form>
)

const mapDispatchProps = (dispatch) => ({
  handleAddTodo: (e) => {
    e.preventDefault()
    dispatch(addTodo(e.target.todo.value))
    e.target.todo.value = ''
    }
})

export default connect(null, mapDispatchProps)(Form)

