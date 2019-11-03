'use strict'

import React from "react";
import css from "./App.module.css";
import { connect } from 'react-redux';
import { addTodo } from '../../redux-flow/reducers/todos/action-creators'

const App = ({todos, handleAddTodo}) => (
  <div>
    <form onSubmit={handleAddTodo}>
      <input type='text' name='todo'/>
      <button type='submit'>Adicionar</button>
    </form>

    {console.log(todos)}

    <ul>
      {todos.map(todo => (
        <li key={todo.id} className={todo.completed ? css.completed : css.notCompleted}>
          {todo.text}
          {console.log(todo.text, todo.id)}
        </li>
    ))}
    </ul>

    <div>
      <h3>Mostart</h3>
      <a href="">Todos</a> | <a href="">Finalizados</a> | <a href="">A fazer</a>
    </div>
  </div>
)

const mapStateProps = (state) => ({
  todos: state
})

const mapDispatchProps = (dispatch) => ({
  handleAddTodo: (e) => {
    e.preventDefault()
    dispatch(addTodo(e.target.todo.value))
  }
})

export default connect(mapStateProps, mapDispatchProps)(App);
