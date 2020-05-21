import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

import { createStore, combineReducers } from "redux"
import { Provider, connect } from "react-redux"

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
