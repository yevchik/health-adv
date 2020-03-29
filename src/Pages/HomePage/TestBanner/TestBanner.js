import React from 'react'
import css from './TestBanner.module.scss'
import Heading from 'components/Heading/Heading'
import Button from 'components/Button/Button'
import IconDotsBg from 'assets/icons/IconDotsBg'

const TestBanner = ({ title, descriptor }) => (
  <section className={css.section}>
    <div className={css.wrapper}>
      <IconDotsBg className={css.icon} />
      <Heading content={title} className={css.title} />
      <p className={css.descriptor} dangerouslySetInnerHTML={{ __html: descriptor }} />
      <Button url='/test' className={css.btn} label='Пройти тест' btnStyle='filledDecorated' />
    </div>
  </section>
)

export default TestBanner
