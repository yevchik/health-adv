import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import SpecialMobile from './SpecialMobile'
import Special from './Special'



const Index = ({elastic, dispatch, ...props}) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {

    setIsServer(false)
  }, []);

  return (
    <>
      {
        elastic.deviceType !== 'desktop'
        ? <SpecialMobile isServer={isServer}/>
        : <Special isServer={isServer}/>
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
