'use strict'

import React from "react";
import css from "./App.module.css";
import Form from '../form/index'
import TodosList from '../todos-list';
import Filter from '../filter/index';
import SearchCep from '../search-cep'
const App = ({todos, handleToggleTodo}) => (
  <div>
    <div>
      <Form/>
      <TodosList/>
      <Filter/>
    </div>
    <div>
      <SearchCep/>
    </div>
  </div>
)

export default App;
