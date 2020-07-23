import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import AboutUsMobile from './AboutUsMobile'
import AboutUs from './AboutUs'



const Index = ({elastic, dispatch, ...props}) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {

    setIsServer(false)
  }, []);

  return (
    <>
      {
        elastic.deviceType !== 'desktop'
        ? <AboutUsMobile isServer={isServer}/>
        : <AboutUs isServer={isServer}/>
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
