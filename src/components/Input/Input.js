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
  inputPalette,
  fieldType = 'input'
}) => {
  const TagName = fieldType
  const input = !value && !onChange
    ? (
      <TagName
        className={classnames(css.input, className,
          { [css.inputError]: isError },
          { [css.inputLight]: inputPalette === 'light' },
          { [css.inputSearch]: isSearch },
        )}
        type={type}
        name={name}
        placeholder={placeholder}
        ref={registration}
      />
    )
    : (
      <TagName
        className={classnames(css.input, className,
          { [css.inputLight]: inputPalette === 'light' },
          { [css.inputDark]: inputPalette === 'dark' },
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
