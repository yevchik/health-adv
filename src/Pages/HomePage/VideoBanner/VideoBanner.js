import React, { Component } from 'react'
import css from './VideoBanner.module.scss'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    type: state.elastic.de
  }
}

class VideoBanner extends Component {
  render () {
    const { titleAdaptive, titleDesktop, background } = this.props

    return (
      <section>
        <div className={css.bg} style={{ backgroundImage: `url("${ process.env.PUBLIC_URL + background }")` }}>
          <div className={css.content}>

          </div>
        </div>
      </section>
    )
  }
}

export default connect(mapStateToProps)(VideoBanner)
