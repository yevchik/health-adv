import React from 'react'
import css from './ContactFormMobile.module.scss'
import { useForm } from "react-hook-form"
import Button from 'components/Button/Button'
import Input from 'components/Input/Input'
import classnames from 'classnames'

const ContactFormMobile = ({ buttonLabel = 'Отправить', warning }) => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.wrapper}>
        <fieldset className={classnames(css.fieldset, css.fieldsetName)}>
          <Input
            className={css.input}
            type='text'
            name='subscribeName'
            placeholder='Имя*'
            registration={register({ required: true })}
            isError={errors.subscribeName}
          />
        </fieldset>
        <fieldset className={classnames(css.fieldset, css.fieldsetEmail)}>
          <Input
            className={css.input}
            type='email'
            name='subscribeMail'
            placeholder='E-mail*'
            registration={register({ required: true })}
            isError={errors.subscribeMail}
          />
        </fieldset>
        <textarea
          ref={register({ required: true })}
          name='userComment'
          className={css.text}
          placeholder='Комменатрий*'
        />
        <Button
          className={css.button}
          iconClassname={css.icon}
          label={buttonLabel}
          btnStyle='filledDecorated'
          type='submit'
        />
        { warning }
      </div>
    </form>
  )
}

export default ContactFormMobile
