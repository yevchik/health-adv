import React from 'react'
import classnames from 'classnames'
import css from './App.module.scss'
import RoutesMobile from 'Pages/RoutesMobile'
import HeaderMobile from 'containers/Header/HeaderMobile'

const AdaptiveApp = () => {
  return (
    <div className={classnames(css.wrapper, 'color-pattern-1')}>
      <HeaderMobile />
      <RoutesMobile />
    </div>
  )
}

export default AdaptiveApp
