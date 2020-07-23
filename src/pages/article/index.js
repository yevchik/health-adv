import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import ArticleMobile from './ArticleMobile'
import Article from './Article'



const Index = ({elastic, dispatch, ...props}) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {

    setIsServer(false)
  }, []);

  return (
    <>
      {
        elastic.deviceType !== 'desktop'
        ? <ArticleMobile isServer={isServer}/>
        : <Article isServer={isServer}/>
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
