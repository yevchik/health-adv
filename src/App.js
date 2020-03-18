import React from 'react';
import ElasticAdaptive from 'hoc/ElasticAdaptive'
import classnames from 'classnames'
import css from './App.module.scss'
import { Switch, Route } from 'react-router-dom'
import Routes from 'Pages/Routes'
import Header from 'containers/Header/Header'

function App() {
  return (
    <ElasticAdaptive>
      <div className={classnames(css.wrapper, 'color-pattern-1')}>
        <Header />
        <Routes />
      </div>
    </ElasticAdaptive>
  )
}

export default App;
