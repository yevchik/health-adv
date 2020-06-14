import React from 'react'
import css from './InputMobile.module.scss'
import classnames from 'classnames'

const InputMobile = ({
  className,
  type = 'text',
  name,
  placeholder = 'Введите значение',
  registration,
  isError
}) => {
  return (
    <input
      className={classnames(css.input, className, { [css.inputError]: isError })}
      type={type}
      name={name}
      placeholder={placeholder}
      ref={registration}
    />
  )
}

export default InputMobile
