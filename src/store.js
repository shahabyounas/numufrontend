import rootReducer from "./reducers"
import { cacheMiddleware } from "./middleware"

import { createStore, compose, applyMiddleware } from "redux"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

 const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(cacheMiddleware))
)

export default store