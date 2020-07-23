import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import SpecialsMobile from './SpecialsMobile'
import Specials from './Specials'



const Index = ({elastic, dispatch, ...props}) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {

    setIsServer(false)
  }, []);

  return (
    <>
      {
        elastic.deviceType !== 'desktop'
        ? <SpecialsMobile isServer={isServer}/>
        : <Specials isServer={isServer}/>
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
