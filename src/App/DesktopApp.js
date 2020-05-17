import React from 'react'
import classnames from 'classnames'
import css from './App.module.scss'
import Header from 'containers/Header/Header'
import Routes from 'Pages/Routes'
import Footer from 'containers/Footer/Footer'

const DesktopApp = () => {
  return (
    <div className={classnames(css.wrapper, 'color-pattern-1')}>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer className={css.footer} />
    </div>
  )
}

export default DesktopApp
