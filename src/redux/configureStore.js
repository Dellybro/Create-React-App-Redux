import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { routerMiddleware ,routerReducer} from 'react-router-redux';
import ReduxPromise from 'redux-promise';
import persistState from 'redux-localstorage';

import rootReducer, {

} from './reducers'

const reducer = combineReducers({
  user: rootReducer,
  routing: routerReducer
});

let config = { key: 'frame-state' };

config.slicer = function myCustomSlicer (paths) {
  return (state) => {
    let subset = { user: state.user };
    return subset;
  };
}

export default function configureStore(history) {
  let initialState;

  if (localStorage['frame-state']) {
    initialState = JSON.parse(localStorage['frame-state']);
  }

  if (window.location.hostname === 'www.imageandframe.com') {
    return createStore(
      reducer,
      initialState,
      compose(
        applyMiddleware(routerMiddleware(history), ReduxPromise),
        persistState(null, config)
      )
    )
  } else {
    return createStore(
      reducer,
      initialState,
      compose(
        applyMiddleware(routerMiddleware(history), ReduxPromise),
        persistState(null, config),
        typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
      )
    )
  }
}