'use strict'

import React from "react";
import css from "./App.module.css";
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../../redux-flow/reducers/todos/action-creators'
import Form from '../form/index'

const App = ({todos, handleToggleTodo}) => (
  <div>

    <Form/>

    <ul>
      {todos.map(todo => (
        <li key={todo.id}
          className={todo.completed ? css.completed : css.notCompleted}
          onClick={handleToggleTodo(todo.id)}>
          {todo.text}
        </li>
    ))}
    </ul>

    <div>
      <h3>Mostrar</h3>
      <a href="">Todos</a> | <a href="">Finalizados</a> | <a href="">A fazer</a>
    </div>
  </div>
)

const mapStateProps = (state) => ({
  todos: state.todos
})

const mapDispatchProps = (dispatch) => ({
  handleAddTodo: (e) => {
    e.preventDefault()
    dispatch(addTodo(e.target.todo.value))
    e.target.todo.value = ''
  },
  handleToggleTodo: (id)=> (e) => {
   dispatch(toggleTodo(id))
  }
})

export default connect(mapStateProps, mapDispatchProps)(App);
