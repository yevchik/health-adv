import React from 'react'
import css from './Input.module.scss'
import classnames from 'classnames'

const Input = ({
  className,
  type = 'text',
  name,
  placeholder = 'Введите значение',
  registration,
  isError,
  value,
  onChange,
  inputPalette
}) => {
  return !value && !onChange
    ? (
      <input
        className={classnames(css.input, className,
          { [css.inputError]: isError },
        )}
        type={type}
        name={name}
        placeholder={placeholder}
        ref={registration}
      />
    )
    : (
      <input
        className={classnames(css.input, className, { [css.inputLight]: inputPalette === 'light' })}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    )
}

export default Input
