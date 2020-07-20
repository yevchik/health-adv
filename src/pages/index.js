import { useEffect } from 'react'
import {connect} from 'react-redux'
import { setDeviceType } from 'store/actions'
import { useDispatch } from 'react-redux'
import Link from 'next/link'

const Index = (props) => {

  return (
    <>
        <p>Start page</p>
    </>
  )
}


Index.getInitialProps = async  (props) => {

  console.log('Index.getInitialProps')

    //Returning the isMobileView as a prop to the component for further use.
    return {
      someText: 'someText',
    }
}




const store = (store) => store

export default connect(store)(Index)
