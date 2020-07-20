import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DesktopApp from 'App/DesktopApp'
import AdaptiveApp from 'App/AdaptiveApp'
import ElasticAdaptive from 'hoc/ElasticAdaptive'

const ViewSwitcher = ({children, isMobileView}) => {
  // const type = useSelector(state => state.elastic.deviceType)
  return (
    <ElasticAdaptive isMobileView={isMobileView}>
        {
          isMobileView
          ? <AdaptiveApp>{children}</AdaptiveApp>
          : <DesktopApp>{children}</DesktopApp>
        }
    </ElasticAdaptive>
  )
}



ViewSwitcher.getInitialProps = async  (props) => {

    //Returning the isMobileView as a prop to the component for further use.
    return {
      someText: 'someText',
    }
}


export default ViewSwitcher
