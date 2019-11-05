import React from "react";
import { render } from "react-dom";
import App from "./components/home/App";
import { createStore } from 'redux';
import { Provider } from "react-redux";
import reducer from './redux-flow/reducers'

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
