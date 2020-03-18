import React from 'react';
import ElasticAdaptive from 'hoc/ElasticAdaptive'
import classnames from 'classnames'
import css from './App.module.scss'
import Routes from 'Pages/Routes'
import Header from 'containers/Header/Header'
import Footer from 'containers/Footer/Footer'

function App() {
  return (
    <ElasticAdaptive>
      <div className={classnames(css.wrapper, 'color-pattern-1')}>
        <Header />
        <Routes />
        <Footer className={css.footer} />
      </div>
    </ElasticAdaptive>
  )
}

export default App;
