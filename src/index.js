import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import 'styles/common.scss'
import { HashRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import elasticAdaptive from 'store/reducers/elasticAdaptive'
import ViewSwitcher from 'ViewSwitcher/ViewSwitcher'
import videoBannerReducer from 'store/reducers/videoBanner'
import uiReducer from 'store/reducers/ui'
import dataReducer from 'store/reducers/data'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  elastic: elasticAdaptive,
  videoBanner: videoBannerReducer,
  ui: uiReducer,
  data: dataReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

// importing images folder from assets to avoid eject and additional setups
export const images = require.context('assets/images', true)
export const videos = require.context('assets/videos', true)
export const icons = require.context('assets/icons', true)
export const files = require.context('assets/files', true)

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
