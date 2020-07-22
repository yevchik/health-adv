import React from 'react';
import 'normalize.css'
import 'simplebar/dist/simplebar.min.css'
import 'swiper/css/swiper.min.css'
// import ElasticAdaptive from 'hoc/ElasticAdaptive'
import { setDeviceType } from 'store/actions'
import ViewSwitcher from 'layouts/ViewSwitcher'
import { wrapper} from '../store';
import App from 'next/app'
import {getContacts, getDocuments} from 'store/actions'

function MyApp({ Component, ...pageProps }) {
  return (
      <ViewSwitcher isMobileView={pageProps.isMobileView}>
        <Component {...pageProps} />
      </ViewSwitcher>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const {dispatch} = appContext.ctx.store
  const appProps = await App.getInitialProps(appContext);
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

  await dispatch(getContacts())

  return {
    ...appProps,
    ...appContext.ctx.store.getState()
  }
}

export default wrapper.withRedux(MyApp)