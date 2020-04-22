import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import 'styles/common.scss'
import { HashRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import elasticAdaptive from 'store/reducers/elasticAdaptive'
import ViewSwitcher from 'ViewSwitcher/ViewSwitcher'

const rootReducer = combineReducers({
  elastic: elasticAdaptive
})

const store = createStore(rootReducer)

// importing images folder from assets to avoid eject and additional setups
export const images = require.context('assets/images', true)
export const videos = require.context('assets/videos', true)
export const icons = require.context('assets/icons', true)

const Content = (
  <Provider store={store}>
    <HashRouter basename='/'>
      <ViewSwitcher />
    </HashRouter>
  </Provider>
)

ReactDOM.render(Content, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
