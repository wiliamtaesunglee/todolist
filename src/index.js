import React from "react";
import { render } from "react-dom";
import App from "./components/home/App";
import reducerTodo from "./redux-flow/reducers/todos";
import reducerVisibilityFilter from './redux-flow/reducers/visibility-filter';
import { createStore } from 'redux';
import { Provider } from "react-redux";

const reducer = (state = {}, action) => {
  return {
    todos: reducerTodo(state.todos, action),
    visibilityFilter: reducerVisibilityFilter(state.visibilityFilter, action)
  }
}

const store = createStore(reducer)

console.log('store: ', store.getState())

store.subscribe(() => {
  console.log('state: ', store.getState())
})

render(
<div>
  <Provider store={store}>
    <App />
  </Provider>
</div>,
 document.getElementById("app"));
