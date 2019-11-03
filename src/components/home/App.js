import React from "react";
import "./App.module.css";
import { connect } from 'react-redux';
import { addTodo } from '../../redux-flow/reducers/todos/action-creators'
const App = ({todos, handleAddTodo}) => (
  <div>
    <form onSubmit={handleAddTodo}>
      <input type='text' name='todo'/>
      <button>Adicionar</button>
    </form>

    {console.log(todos)}

    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
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
    console.log(e.target.todo.value)
    dispatch(addTodo(e.target.todo.value))
  }
})

export default connect(mapStateProps, mapDispatchProps)(App);
