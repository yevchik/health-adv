import { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { setDeviceType, setFontSize } from 'store/actions'

function mapStateToProps (state) {
  return {
    state: state.elastic.config,
    type: state.elastic.deviceType
  }
}
function mapDispatchToProps (dispatch) {
  return {
    setFontSize: data => dispatch(setFontSize(data)),
    setDeviceType: type => dispatch(setDeviceType(type))
  }
}

function ElasticAdaptive ({...props}) {
  useEffect(() => {
    changeSize()
    window.addEventListener('resize', changeSize)
    window.addEventListener('orientationchange', changeSize)
    return () => {
      window.removeEventListener('resize', changeSize)
      window.removeEventListener('orientationchange', changeSize)
    };
  }, []);

  useEffect(() => {
    changeSize()
  }, [props.type]);

  function changeSize () {
    let width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth
    const { type } = props
    const html = document.documentElement
    const { widthLimit, baseWidth } = props.state[type]
    let { baseSize } = props.state[type]
    let actualWidth = width

    if (widthLimit) {
      actualWidth = Math.min(width, widthLimit)
    }

    const currentSize = actualWidth / baseWidth * baseSize
    props.setFontSize(currentSize)
    html.style.fontSize = currentSize + 'px'
  }

  return props.children

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ElasticAdaptive))
