import React from "react";
import { render } from "react-dom";
import App from "./components/home/App";
import reducer from "./redux-flow/reducers/todos";
import { createStore } from 'redux'

const store = createStore(reducer)

render(<App />, document.getElementById("app"));
