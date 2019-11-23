'use strict'

import React from "react"
import css from "./App.module.css"
import Form from '../form/index'
import TodosList from '../todos-list'
import Filter from '../filter/index'
import SearchCepContainer from '../search-cep'
import style from './App.module.css'

const App = ({todos, handleToggleTodo}) => (
  <div className={style.div}>
    <div>
      <Form/>
      <TodosList/>
      <Filter/>
    </div>
    <div>
      <SearchCepContainer/>
    </div>
  </div>
)

export default App;
