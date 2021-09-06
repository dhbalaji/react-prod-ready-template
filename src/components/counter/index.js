import React from 'react'
import { Provider } from 'react-redux'
// import { applyMiddleware, createStore, compose } from 'redux'
import CounterContainer from './Counter'
// import reducer, { initialState } from './reducers'
// import { createLogger } from 'redux-logger'
// import ReduxThunk from 'redux-thunk'
import store from './store';

// const logger = createLogger({
//     // ...options
// })
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//
// const store = createStore(
//     reducer,
//     initialState,
//     composeEnhancers(applyMiddleware(ReduxThunk, logger))
// )

const wrappedCounter = () => (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
);
export default wrappedCounter;
