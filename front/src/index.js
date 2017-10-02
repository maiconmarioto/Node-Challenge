import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/index';
import { Link, Route, BrowserRouter, IndexRoute } from 'react-router-dom';
import asyncComponent from './utils/asyncComponent';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(logger, ReduxThunk)(
  createStore
);

const store = createStoreWithMiddleware(reducers);

const App = asyncComponent(() =>
  import(/* webpackChunkName: "App" */ './pages/App').then(
    module => module.default
  )
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
