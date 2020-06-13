import React from 'react'
import css from 'components/TestBanner/TestBannerMobile.module.scss'
import Heading from 'components/Heading/Heading'
import IconDotsBg from 'assets/icons/IconDotsBg'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import ContainerMobile from 'components/Grid/ContainerMobile'
import ButtonMobile from 'components/Button/ButtonMobile'

const TestBannerMobile = ({
  title = 'Не знаете, какая услуга нужна?',
  descriptor = 'Пройдите тест, ответив на несколько вопросов',
  type
}) => (
  <section className={classnames(css.section, { [css.sectionSimple]: type === 'simple' })}>
    <ContainerMobile className={css.container}>
      <div className={css.wrapper}>
        <div className={css.content}>
          <IconDotsBg className={css.icon} />
          <Heading content={title} className={css.title} />
          <p className={css.descriptor} dangerouslySetInnerHTML={{ __html: descriptor }} />
        </div>
        <ButtonMobile
          url='/test'
          className={css.btn}
          iconClassname={css.arrow}
          label='Пройти тест'
          btnStyle='filledDecorated'
          handleClick={() => {}}
        />
      </div>
    </ContainerMobile>
  </section>
)

TestBannerMobile.propTypes = {
  // section heading
  title: PropTypes.string,
  // descriptor layout
  descriptor: PropTypes.string,
  // component style preset
  type: PropTypes.oneOf(['simple', undefined])
}

export default React.memo(TestBannerMobile)
