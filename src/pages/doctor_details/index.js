import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import DoctorDetailsMobile from './DoctorDetailsMobile'
import DoctorDetails from './DoctorDetails'



const Index = ({elastic, dispatch, ...props}) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {

    setIsServer(false)
  }, []);

  return (
    <>
      {
        elastic.deviceType !== 'desktop'
        ? <DoctorDetailsMobile isServer={isServer}/>
        : <DoctorDetails isServer={isServer}/>
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
