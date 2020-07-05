import React from 'react'
import css from './SignupBannerMobile.module.scss'
import Heading from 'components/Heading/Heading'
import { Link } from 'react-router-dom'
import IconLock from 'assets/icons/IconLock'
import ContainerMobile from 'components/Grid/ContainerMobile'
import SignupFormMobile from 'components/SignupBanner/SignupForm/SignupFormMobile'
import IconDotsBg from 'assets/icons/IconDotsBg'

const SignupBannerMobile = ({
  title = 'Хотите узнавать первым о&nbsp;наших акциях?',
  descriptor = 'Подпишитесь на&nbsp;рассылку и&nbsp;будьте в&nbsp;курсе наших акций',
  buttonLabel = 'Отправить',
  specialFormComponent,
  noWarning = false
}) => {
  return (
    <div className={css.wrapper}>
      <IconDotsBg className={css.dots} />
      <ContainerMobile className={css.container}>
        <Heading content={title} className={css.title} />
        <p className={css.descriptor} dangerouslySetInnerHTML={{ __html: descriptor }} />
        <div className={css.form}>
          {specialFormComponent || <SignupFormMobile buttonLabel={buttonLabel} />}
        </div>
        {!noWarning &&
          <p className={css.warning}>
            <IconLock className={css.iconLock} />
            <span>
              Нажимая на кнопку, я соглашаюсь на обработку персональных данных, с <Link className={css.link} to='/'>политикой</Link> ознакомлен
            </span>
          </p>
        }
      </ContainerMobile>
    </div>
  )
}

export default SignupBannerMobile
