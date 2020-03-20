import React, { Component } from 'react'
import css from './VideoBanner.module.scss'
import { connect } from 'react-redux'
import Container from 'components/Grid/Container'
import Button from 'components/Button/Button'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'

const mapStateToProps = state => {
  return {
    type: state.elastic.de
  }
}

class VideoBanner extends Component {
  render () {
    const { sloganAdaptive, sloganDesktop, background, descriptor } = this.props

    return (
      <section>
        <div className={css.bg} style={{ backgroundImage: `url("${ process.env.PUBLIC_URL + background }")` }}>
          <ButtonPlay
            className={css.play}
            label='Видео о клинике'
            handleClick={() => {}}
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
      </section>
    )
  }
}

export default connect(mapStateToProps)(VideoBanner)
