import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import AboutUsFAQMobile from './AboutUsFAQMobile'
import AboutUsFAQ from './AboutUsFAQ'

const Index = ({elastic, dispatch, ...props}) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {

    setIsServer(false)
  }, []);

  return (
    <>
      {
        elastic.deviceType !== 'desktop'
        ? <AboutUsFAQMobile isServer={isServer}/>
        : <AboutUsFAQ isServer={isServer}/>
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
