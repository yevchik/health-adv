import React from 'react';
import 'normalize.css'
import 'styles/common.scss'
import 'styles/variables.scss'
import 'simplebar/dist/simplebar.min.css'
import { setDeviceType } from 'store/actions'
import ViewSwitcher from 'layouts/ViewSwitcher'
import { wrapper} from '../store';
import App from 'next/app'

function MyApp({ Component, ...pageProps }) {

  console.log(13, pageProps.elastic.deviceType)

  return (
      <ViewSwitcher deviceType={pageProps.elastic.deviceType}>
          <Component {...pageProps} />
      </ViewSwitcher>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const {dispatch} = appContext.ctx.store
  let isMobileView = (appContext.ctx.req
  ? appContext.ctx.req.headers['user-agent']
  : navigator.userAgent).match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  if ( isMobileView ) {
    dispatch(setDeviceType('mobile'))
  } else if (!isMobileView) {
    dispatch(setDeviceType('desktop'))
  } else if (false) {
    dispatch(setDeviceType('tablet'))
  }

  console.log('render')

  return {
    isMobileView,
    ...appContext.ctx.store.getState()
  }
}

export default wrapper.withRedux(MyApp)