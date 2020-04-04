import React from 'react';
import ElasticAdaptive from 'hoc/ElasticAdaptive'
import classnames from 'classnames'
import css from './App.module.scss'
import Routes from 'Pages/Routes'
import Header from 'containers/Header/Header'
import Footer from 'containers/Footer/Footer'

// importing images folder from assets to avoid eject and additional setups
export const images = require.context('assets/images', true)
export const videos = require.context('assets/videos', true)


const App = () => {
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

export default React.memo(App)
