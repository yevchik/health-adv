import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import ContactsMobile from './ContactsMobile'
import Contacts from './Contacts'

const Index = ({elastic, dispatch, ...props}) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false)
  }, []);

  return (
    <>
      {
        elastic.deviceType !== 'desktop'
        ? <ContactsMobile isServer={isServer}/>
        : <Contacts isServer={isServer}/>
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
