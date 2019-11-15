'use strict'
import css from './index.module.css'
import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../redux-flow/reducers/todos/action-creators'
import * as filterActions from '../../redux-flow/reducers/visibility-filter/actions'

 const todosList = ({todos, handleToggleTodo, activeFilter}) => (
  <ul>
    {getVisibleTodos(todos, activeFilter).map((todo) => (
      <li
        key={todo.id}
        className={todo.completed ? css.completed : css.notCompleted}
        onClick={handleToggleTodo(todo.id)} >
        {todo.text}
      </li>
    ))}
  </ul>
 )

const getVisibleTodos = (todos, activeFilter) => {
  const filterItems = {
    [filterActions.SHOW_ALL] : todos,
    [filterActions.SHOW_COMPLETED]: todos.filter(todo => todo.completed),
    [filterActions.SHOW_ACTIVE]: todos.filter(todo => !todos.completed)
  }
  return filterItems[activeFilter]
}

const mapStateProps = (state) => ({
  todos: state.todos,
  activeFilter: state.visibilityFilter
})

const mapDispatchProps = (dispatch) => ({
  handleToggleTodo: (id) => (e) => {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateProps, mapDispatchProps)(todosList)
