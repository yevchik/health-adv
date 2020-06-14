import React from 'react'
import css from './SignupForm.module.scss'
import { useForm } from "react-hook-form"
import Button from 'components/Button/Button'
import Input from 'components/Input/Input'

const SignupForm = ({ buttonLabel }) => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.wrapper}>
        <fieldset className={css.fieldset}>
          <Input
            type='text'
            name='subscribeName'
            placeholder='Имя*'
            registration={register({ required: true })}
            isError={errors.subscribeName}
          />
        </fieldset>
        <fieldset className={css.fieldset}>
          <Input
            type='email'
            name='subscribeMail'
            placeholder='E-mail*'
            registration={register({ required: true })}
            isError={errors.subscribeMail}
          />
        </fieldset>
        <Button
          className={css.button}
          iconClassname={css.icon}
          label={buttonLabel}
          btnStyle='filledDecorated'
          type='submit'
        />
      </div>
    </form>
  )
}

export default SignupForm
