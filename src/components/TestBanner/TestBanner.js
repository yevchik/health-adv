import React from 'react'
import css from 'components/TestBanner/TestBanner.module.scss'
import Heading from 'components/Heading/Heading'
import Button from 'components/Button/Button'
import IconDotsBg from 'assets/icons/IconDotsBg'
import Container from 'components/Grid/Container'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const TestBanner = ({
  title = 'Не&nbsp;знаете, какая услуга нужна?',
  descriptor = 'Пройдите тест, ответив на&nbsp;несколько вопросов',
  type = 'simple'
}) => (
  <section className={classnames(css.section, { [css.sectionSimple]: type === 'simple' })}>
    <Container className={css.container}>
      <div className={css.wrapper}>
        <div className={css.content}>
          <IconDotsBg className={css.icon} />
          <Heading content={title} className={css.title} />
          <p className={css.descriptor} dangerouslySetInnerHTML={{ __html: descriptor }} />
        </div>
        <Button
          url='/test'
          className={css.btn}
          iconClassname={css.arrow}
          label='Пройти тест'
          btnStyle='filledDecorated'
          handleClick={() => {}}
        />
      </div>
    </Container>
  </section>
)

TestBanner.propTypes = {
  // section heading
  title: PropTypes.string,
  // descriptor layout
  descriptor: PropTypes.string,
  // component style preset
  type: PropTypes.oneOf(['simple', undefined])
}

export default React.memo(TestBanner)
