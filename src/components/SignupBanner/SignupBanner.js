import React from 'react'
import css from './SignupBanner.module.scss'
import Container from 'components/Grid/Container'
import Heading from 'components/Heading/Heading'
import { Link } from 'react-router-dom'
import IconLock from 'assets/icons/IconLock'
import SignupForm from 'components/SignupBanner/SignupForm/SignupForm'

const SignupBanner = ({
  title = 'Хотите узнавать первым о&nbsp;наших акциях?',
  descriptor = 'Подпишитесь на&nbsp;рассылку и&nbsp;будьте в&nbsp;курсе наших акций',
  buttonLabel = 'Отправить'
}) => {
  return (
    <div className={css.wrapper}>
      <Container>
        <Heading content={title} className={css.title} />
        <p className={css.descriptor} dangerouslySetInnerHTML={{ __html: descriptor }} />
        <div className={css.form}>
          <SignupForm buttonLabel={buttonLabel} />
        </div>
        <p className={css.warning}>
          <IconLock className={css.iconLock} />
          Нажимая на кнопку, я соглашаюсь на обработку персональных данных, с <Link className={css.link} to='/'>политикой</Link> ознакомлен
        </p>
      </Container>
    </div>
  )
}

export default SignupBanner
