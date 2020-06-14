import React from 'react'
import css from './SignupFormMobile.module.scss'
import { useForm } from "react-hook-form"
import ButtonMobile from 'components/Button/ButtonMobile'
import InputMobile from 'components/Input/InputMobile'

const SignupFormMobile = ({ infoBlock, buttonLabel }) => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.wrapper}>
        <fieldset className={css.fieldset}>
          <InputMobile
            type='text'
            name='subscribeName'
            placeholder='Имя*'
            registration={register({ required: true })}
            isError={errors.subscribeName}
          />
        </fieldset>
        <fieldset className={css.fieldset}>
          <InputMobile
            type='email'
            name='subscribeMail'
            placeholder='E-mail*'
            registration={register({ required: true })}
            isError={errors.subscribeMail}
          />
        </fieldset>
        <ButtonMobile
          className={css.button}
          iconClassname={css.icon}
          label={buttonLabel}
          btnStyle='filledDecorated'
          type='submit'
        />
        { infoBlock }
      </div>
    </form>
  )
}

export default SignupFormMobile
