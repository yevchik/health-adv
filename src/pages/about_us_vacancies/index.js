import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import AboutUsVacanciesMobile from './AboutUsVacanciesMobile'
import AboutUsVacancies from './AboutUsVacancies'



const Index = ({elastic, dispatch, ...props}) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {

    setIsServer(false)
  }, []);

  return (
    <>
      {
        elastic.deviceType !== 'desktop'
        ? <AboutUsVacanciesMobile isServer={isServer}/>
        : <AboutUsVacancies isServer={isServer}/>
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
