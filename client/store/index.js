
import {compose, createStore, applyMiddleware } from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'

import { logger } from '../middleware'
import rootReducer from '../reducers'

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const store = create(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(logger),
      autoRehydrate()
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }
  
  persistStore(store)
  return store
}
