import React from 'react'
import classnames from 'classnames'
import css from './App.module.scss'
import Header from 'containers/Header/Header'
// import Routes from 'utils/Routes'
import Footer from 'containers/Footer/Footer'

const DesktopApp = ({children}) => {
  return (
    <div className={classnames(css.wrapper, css['color-pattern-1'])}>
      <Header />
      <main>
        {/* <Routes /> */}
        {children}
      </main>
      <Footer className={css.footer} />
    </div>
  )
}

export default DesktopApp
