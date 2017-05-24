/*React*/
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import createRoutes from './createRoutes'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/configureStore';

//Import SCSS
import './styles.scss';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
// const middleware = routerMiddleware(history)
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = configureStore(history);

history.listen((location) => {
	console.log(location);
})

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

/*Routes*/
const routes = createRoutes(history);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();