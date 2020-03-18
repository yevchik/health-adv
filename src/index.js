import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css'
import 'styles/common.scss'
import { HashRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import elasticAdaptive from 'store/reducers/elasticAdaptive'

const rootReducer = combineReducers({
  elastic: elasticAdaptive
})

const store = createStore(rootReducer)

const Content = (
  <Provider store={store}>
    <HashRouter basename='/'>
      <App />
    </HashRouter>
  </Provider>
)

ReactDOM.render(Content, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
