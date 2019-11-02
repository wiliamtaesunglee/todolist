import React from "react";
import { render } from "react-dom";
import App from "./components/home/App";
import reducer from "./redux-flow/reducers/todos";
import { createStore } from 'redux'
import { Provaider } from "react-redux"
const store = createStore(reducer)
console.log(store)

render(
  <Provaider store={store}>
    <App />
  </Provaider>
, document.getElementById("app"));
