import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import ContactsMobile from './ContactsMobile'
import {getContacts} from 'store/actions'
import Contacts from './Contacts'

const Index = ({elastic, contacts, dispatch, ...props}) => {

  return (
    <>
      {contacts.length &&
        elastic.deviceType !== 'desktop'
        ? <ContactsMobile contacts={contacts}/>
        : <Contacts contacts={contacts}/>
      }
    </>
  )
}


Index.getInitialProps = async (props) => {
  const {dispatch} = props.store
  await dispatch(getContacts())

  return {
    someText: 'some text',
  }
}

const mapStateToProps = ({data}) => ({
  contacts: data.contacts,
})

export default connect(mapStateToProps)(Index)
