'use strict'

import React from "react";
import css from "./App.module.css";
import Form from '../form/index'
import TodosList from '../todos-list';
import Filter from '../filter/index';

const App = ({todos, handleToggleTodo}) => (
  <div>
    <Form/>
    <TodosList/>
    <Filter/>
  </div>
)

export default App;
