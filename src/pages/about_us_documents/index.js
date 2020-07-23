import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import AboutUsDocumentsMobile from './AboutUsDocumentsMobile'
import AboutUsDocuments from './AboutUsDocuments'



const Index = ({elastic, dispatch, ...props}) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {

    setIsServer(false)
  }, []);

  return (
    <>
      {
        elastic.deviceType !== 'desktop'
        ? <AboutUsDocumentsMobile isServer={isServer}/>
        : <AboutUsDocuments isServer={isServer}/>
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
