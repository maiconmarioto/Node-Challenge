import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { Link, Route, BrowserRouter, IndexRoute } from 'react-router-dom';

import reducers from './reducers/index';
import asyncComponent from './utils/asyncComponent';
import employeeSaga from './sagas/employeeSaga';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

// const createStoreWithMiddleware = applyMiddleware(logger, sagaMiddleware)(
//   createStore
// );

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(employeeSaga);

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
