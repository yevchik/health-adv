import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import DoctorsMobile from './DoctorsMobile'
import Doctors from './Doctors'



const Index = ({elastic, dispatch, ...props}) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {

    setIsServer(false)
  }, []);

  return (
    <>
      {
        elastic.deviceType !== 'desktop'
        ? <DoctorsMobile isServer={isServer}/>
        : <Doctors isServer={isServer}/>
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
