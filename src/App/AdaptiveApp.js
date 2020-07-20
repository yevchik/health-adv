import React from 'react'
import classnames from 'classnames'
import css from './AppMobile.module.scss'
// import RoutesMobile from 'pages/RoutesMobile'
import HeaderMobile from 'containers/Header/HeaderMobile'
import FooterMobile from 'containers/Footer/FooterMobile'

const AdaptiveApp = ({children}) => {
  return (
    <div className={classnames(css.wrapper, css['color-pattern-1'])}>
      <HeaderMobile />
      <main>
        {/* <RoutesMobile /> */}
        {children}
      </main>
      <FooterMobile className={css.footer} />
    </div>
  )
}

export default AdaptiveApp
