import React from 'react'
import css from './InputMobile.module.scss'
import classnames from 'classnames'
import IconSearch from 'assets/icons/IconSearch'

const InputMobile = ({
  className,
  type = 'text',
  name,
  onChange,
  placeholder = 'Введите значение',
  registration,
  isError,
  isSearch,
  inputPalette,
  value,
}) => {
  const input = !value && !onChange
    ? (
      <input
        className={classnames(css.input, className,
          { [css.inputError]: isError },
          { [css.inputLight]: inputPalette === 'light' },
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

export default InputMobile
