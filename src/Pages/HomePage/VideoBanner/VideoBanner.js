import React, { Component } from 'react'
import css from './VideoBanner.module.scss'
import { connect } from 'react-redux'
import Container from 'components/Grid/Container'
import Button from 'components/Button/Button'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import Modal from 'components/Modal/Modal'

const mapStateToProps = state => {
  return {
    type: state.elastic.deviceType
  }
}

class VideoBanner extends Component {
  state = {
    isModalVisible: false
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
    const { sloganAdaptive, sloganDesktop, background, descriptor, modalVideo } = this.props

    return (
      <section>
        <div className={css.bg} style={{ backgroundImage: `url("${ process.env.PUBLIC_URL + background }")` }}>
          <ButtonPlay
            className={css.play}
            label='Видео о клинике'
            handleClick={this.handleOpenModal}
          />
          <div className={css.content}>
            <Container className={css.container}>
              <p className={css.sloganAdaptive} dangerouslySetInnerHTML={{ __html: sloganAdaptive }} />
              <p className={css.sloganDesktop}>
                { sloganDesktop }
              </p>
              <p className={css.descriptor}>
                { descriptor }
              </p>
              <div className={css.btn}>
                <Button
                  btnStyle='decorated'
                  type='button'
                  onClick={() => {}}
                  label='Записаться'
                />
              </div>
            </Container>
          </div>
        </div>
        <Modal isVisible={isModalVisible} handleCloseModal={this.handleCloseModal}>
          <div className={css.modal}>
            <video className={css.video} controls autoPlay>
              <source src={process.env.PUBLIC_URL + modalVideo} />
            </video>
          </div>
        </Modal>
      </section>
    )
  }
}

export default connect(mapStateToProps)(VideoBanner)
