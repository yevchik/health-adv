import React from 'react'
import css from './Input.module.scss'
import classnames from 'classnames'
import IconSearch from 'assets/icons/IconSearch'

const Input = ({
  className,
  type = 'text',
  name,
  placeholder = 'Введите значение',
  registration,
  isError,
  isSearch,
  value,
  onChange,
  inputPalette
}) => {
  const input = !value && !onChange
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
        className={classnames(css.input, className,
          { [css.inputLight]: inputPalette === 'light' },
          { [css.inputSearch]: isSearch },
        )}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    )

  return (
    <div className={css.wrapper}>
      {isSearch &&
      <IconSearch className={css.iconSearch} />
      }
      { input }
    </div>
  )
}

export default Input
