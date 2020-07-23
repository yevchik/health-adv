import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import ContactsMobile from './ContactsMobile'
import Contacts from './Contacts'

const Index = ({elastic, contacts, dispatch, ...props}) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false)
  }, []);

  return (
    <>
      {
        elastic.deviceType !== 'desktop'
        ? <ContactsMobile contacts={contacts} isServer={isServer}/>
        : <Contacts contacts={contacts} isServer={isServer}/>
      }
    </>
  )
}


Index.getInitialProps = async (props) => {
  const {dispatch} = props.store
  await dispatch(getContacts())

  return {
    ...props,
  }
}

const mapStateToProps = ({data}) => ({
  contacts: data.contacts,
})

export default connect(mapStateToProps)(Index)
