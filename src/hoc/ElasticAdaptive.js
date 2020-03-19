import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setFontSize } from 'store/actions'

function mapStateToProps (state) {
  return {
    state: state.elastic.config
  }
}
function mapDispatchToProps (dispatch) {
  return {
    setFontSize: (data) => dispatch(setFontSize(data))
  }
}

class ElasticAdaptive extends React.Component {
 constructor (props) {
   super(props)
   this.state = {
     type: this.getDeviceType(),
     width: document.body.clientWidth || window.innerWidth || document.documentElement.clientWidth,
   }
 }

  componentDidMount () {
    this.changeSize()
    window.addEventListener('resize', this.changeSize)
    window.addEventListener('orientationchange', this.changeSize)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.changeSize)
    window.removeEventListener('orientationchange', this.changeSize)
  }

  getDeviceType = () => {
    let width = document.body.clientWidth || window.innerWidth || document.documentElement.clientWidth

    if (width >= 1280) {
      return 'desktop'
    }

    if (width < 1280 && width >= 768) {
      return 'tablet'
    }

    if (width < 768) {
      return 'mobile'
    }
  }

  getContentType = () => {
    let width = document.body.clientWidth || window.innerWidth || document.documentElement.clientWidth

    this.setState({
      type: this.getDeviceType(),
      width: width
    })
  }

  changeSize = () => {
    this.getContentType()
    const { type, width } = this.state
    const html = document.documentElement
    const { widthLimit, baseWidth } = this.props.state[type]
    let { baseSize } = this.props.state[type]
    let actualWidth = width

    if (widthLimit) {
      actualWidth = Math.min(width, widthLimit)
    }

    const currentSize = actualWidth / baseWidth * baseSize
    this.props.setFontSize(currentSize)
    html.style.fontSize = currentSize + 'px'
  }

  render () {
    return this.props.children
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ElasticAdaptive))
