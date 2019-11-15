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
  switch(activeFilter) {
    case filterActions.SHOW_ALL:
      return todos
    case filterActions.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case filterActions.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
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
