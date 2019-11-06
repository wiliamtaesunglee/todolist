'use strict'

import React from "react";
import css from "./App.module.css";
import Form from '../form/index'
import TodosList from '../todos-list'

const App = ({todos, handleToggleTodo}) => (
  <div>
    <Form/>
    <TodosList/>
    <div>
      <h3>Mostrar</h3>
      <a href="">Todos</a> | <a href="">Finalizados</a> | <a href="">A fazer</a>
    </div>
  </div>
)

export default App;
