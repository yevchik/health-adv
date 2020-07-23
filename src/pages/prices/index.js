import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import PricesMobile from './PricesMobile'
import Prices from './Prices'



const Index = ({elastic, dispatch, ...props}) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {

    setIsServer(false)
  }, []);

  return (
    <>
      {
        elastic.deviceType !== 'desktop'
        ? <PricesMobile isServer={isServer}/>
        : <Prices isServer={isServer}/>
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
