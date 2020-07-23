import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import NewsArticleMobile from './NewsArticleMobile'
import NewsArticle from './NewsArticle'



const Index = ({elastic, dispatch, ...props}) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {

    setIsServer(false)
  }, []);

  return (
    <>
      {
        elastic.deviceType !== 'desktop'
        ? <NewsArticleMobile isServer={isServer}/>
        : <NewsArticle isServer={isServer}/>
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
