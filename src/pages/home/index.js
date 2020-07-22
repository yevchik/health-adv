import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import HomePageMoble from './HomePageMoble'
import HomePage from './HomePage'
// import {getContacts, getDocuments} from 'store/actions'


const Index = ({elastic, dispatch, ...props}) => {
  const [isServer, setIsServer] = useState(true);
  // console.log(props)
  useEffect(() => {
    // dispatch(getContacts())
    // dispatch(getDocuments())
    setIsServer(false)
  }, []);

  return (
    <>
      {
        elastic.deviceType !== 'desktop'
        ? <HomePageMoble isServer={isServer}/>
        : <HomePage isServer={isServer}/>
      }
    </>
  )
}


Index.getInitialProps = async (props) => {
  const {dispatch} = props.store
  // dispatch(getContacts())
  // dispatch(getDocuments())
  return {
    someText: 'someText'
  }
}


export default connect(store=>store)(Index)
