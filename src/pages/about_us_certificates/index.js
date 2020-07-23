import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import AboutUsCertificatesMobile from './AboutUsCertificatesMobile'
import AboutUsCertificates from './AboutUsCertificates'



const Index = ({elastic, dispatch, ...props}) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {

    setIsServer(false)
  }, []);

  return (
    <>
      {
        elastic.deviceType !== 'desktop'
        ? <AboutUsCertificatesMobile isServer={isServer}/>
        : <AboutUsCertificates isServer={isServer}/>
      }
    </>
  )
}


Index.getInitialProps = async (props) => {
  const {dispatch} = props.store

  return {
    someText: 'someText'
  }
}


export default connect(store=>store)(Index)
