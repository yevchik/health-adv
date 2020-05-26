import React from 'react'
import classnames from 'classnames'
import css from './AppMobile.module.scss'
import RoutesMobile from 'Pages/RoutesMobile'
import HeaderMobile from 'containers/Header/HeaderMobile'
import FooterMobile from 'containers/Footer/FooterMobile'

const AdaptiveApp = () => {
  return (
    <div className={classnames(css.wrapper, 'color-pattern-1')}>
      <HeaderMobile />
      <main>
        <RoutesMobile />
      </main>
      <FooterMobile className={css.footer} />
    </div>
  )
}

export default AdaptiveApp
