import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import MediacenterMobile from './MediacenterMobile'
import Mediacenter from './Mediacenter'



const Index = ({elastic, dispatch, ...props}) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {

    setIsServer(false)
  }, []);

  return (
    <>
      {
        elastic.deviceType !== 'desktop'
        ? <MediacenterMobile isServer={isServer}/>
        : <Mediacenter isServer={isServer}/>
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
