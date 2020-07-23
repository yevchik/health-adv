import React from 'react'
import Page404Mobile from './Page404Mobile'
import Page404 from './Page404'

const Index = ({elastic, dispatch, ...props}) => {
  return (
    <>
      {
        elastic.deviceType !== 'desktop'
        ? <Page404Mobile/>
        : <Page404/>
      }
    </>
  )
}


export default Index
