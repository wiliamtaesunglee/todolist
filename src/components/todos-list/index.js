'use strict'
import css from './index.module.css'
import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../redux-flow/reducers/todos/action-creators'

 const todosList = ({todos, handleToggleTodo}) => (
  <ul>
    {todos.map((todo) => (
      <li
        key={todo.id}
        className={todo.completed ? css.completed : css.notCompleted}
        onClick={handleToggleTodo(todo.id)} >
        {todo.text}
      </li>
    ))}
  </ul>
 )

const mapStateProps = (state) => ({
  todos: state.todos
})

const mapDispatchProps = (dispatch) => ({
  handleToggleTodo: (id) => (e) => {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateProps, mapDispatchProps)(todosList)
