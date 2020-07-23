import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import ReviewsPageMobile from './ReviewsPageMobile'
import ReviewsPage from './ReviewsPage'



const Index = ({elastic, dispatch, ...props}) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {

    setIsServer(false)
  }, []);

  return (
    <>
      {
        elastic.deviceType !== 'desktop'
        ? <ReviewsPageMobile isServer={isServer}/>
        : <ReviewsPage isServer={isServer}/>
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
