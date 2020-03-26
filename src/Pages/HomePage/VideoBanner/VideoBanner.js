import React, { Component } from 'react'
import css from './VideoBanner.module.scss'
import { connect } from 'react-redux'
import Container from 'components/Grid/Container'
import Button from 'components/Button/Button'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import Modal from 'components/Modal/Modal'
import IconDots from 'assets/icons/IconDots'
import classnames from 'classnames'
import { images, videos } from 'App'

const mapStateToProps = state => {
  return {
    type: state.elastic.deviceType
  }
}

class VideoBanner extends Component {
  constructor (props) {
    super(props)
    // For video time reset on modal open
    this.videoRef = null
    this.videoBgRef = null
  }

  state = {
    isModalVisible: false
  }

  componentDidUpdate (prevProps, prevState) {
    // reset video playtime in modal when it opens
    if (prevState.isModalVisible !== this.state.isModalVisible && this.state.isModalVisible) {
      this.videoRef.load()
    }
  }

  setVideoRef = el => {
    this.videoRef = el
  }
  setVideoBgRef = el => {
    this.videoBgRef = el
  }

  handleOpenModal = () => {
    this.setState({
      isModalVisible: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      isModalVisible: false
    })
  }

  render () {
    const { isModalVisible } = this.state
    const {
      top,
      bottom,
      type
    } = this.props

    // desktop has no bg image - only video, mobile and tablet have different image sources for
    // proper data size management
    let background = 'none'

    if (type !== 'desktop') {
      background = type === 'mobile'
        ? `url("${ images('./' + bottom.backgroundMobile) }")`
        : `url("${ images('./' + bottom.backgroundTablet) }")`
    }

    return (
      <section>
        <div className={css.bg} style={{ backgroundImage: background }} />
        <Container className={css.top}>
          {type === 'desktop' &&
            <p className={css.mainSlogan} dangerouslySetInnerHTML={{ __html: top.slogan }} />
          }
          <div className={css.previewWrapper}>
            {type === 'desktop' &&
              <h2 className={css.previewLabel}>
                { top.previewLabel }
              </h2>
            }
            <ButtonPlay
              className={classnames(css.play, {
                [css.preview]: type === 'desktop'
              })}
              background={type === 'desktop' ? `url("${ images('./' + top.modalVideoPreview) }")` : 'none'}
              label={type === 'desktop' ? '' : 'Видео о клинике'}
              handleClick={this.handleOpenModal}
            />
          </div>
        </Container>
        <div className={css.content}>
          {type === 'desktop' &&
            <video className={css.videoBg} muted='muted' autoPlay='autoplay' loop='loop' ref={this.setVideoBgRef} preload='preload'>
              <source src={videos('./' + bottom.videoBg)} />
            </video>
          }
          <Container className={css.container}>
            {type === 'desktop' && <IconDots className={css.dots} />}
            <div className={css.textContent}>
              <p className={css.sloganAdaptive} dangerouslySetInnerHTML={{ __html: bottom.sloganAdaptive }} />
              <p className={css.sloganDesktop} dangerouslySetInnerHTML={{ __html: bottom.sloganDesktop }} />
              <p className={css.descriptor} dangerouslySetInnerHTML={{ __html: bottom.descriptor }} />
            </div>
            <div className={css.btn}>
              <Button
                btnStyle={type === 'desktop' ? 'gradient' : 'decorated'}
                type='button'
                onClick={() => {}}
                label='Записаться'
              />
            </div>
          </Container>
        </div>
        <Modal isVisible={isModalVisible} handleCloseModal={this.handleCloseModal}>
          <video className={css.video} controls autoPlay ref={this.setVideoRef}>
            <source src={videos('./' + top.modalVideo)} />
          </video>
        </Modal>
      </section>
    )
  }
}

export default connect(mapStateToProps)(VideoBanner)
