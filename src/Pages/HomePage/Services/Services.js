import React, { Component } from 'react'
import { connect } from 'react-redux'
import ServicesAdaptive from 'Pages/HomePage/Services/ServicesAdaptive/ServicesAdaptive'
import ServicesDesktop from 'Pages/HomePage/Services/ServicesDesktop/ServicesDesktop'

const mapStateToProps = state => {
  return {
    type: state.elastic.deviceType,
  }
}

class Services extends Component {
  render () {
    const { type } = this.props

    return type === 'desktop'
      ? <ServicesDesktop {...this.props} />
      : <ServicesAdaptive {...this.props} />
  }
}

export default connect(mapStateToProps)(Services)
