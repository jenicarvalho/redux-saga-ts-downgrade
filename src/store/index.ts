import { createStore, Store, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from 'redux-devtools-extension'

import createRootReducer from './ducks/rootReducer'
import rootSaga from "./ducks/rootSaga"

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  sagaMiddleware
]

const store: Store = createStore(
  createRootReducer(),
  composeWithDevTools(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export default store
