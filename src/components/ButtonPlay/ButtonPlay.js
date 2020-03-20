import React from 'react'
import classnames from 'classnames'
import css from './ButtonPlay.module.scss'
import IconPlay from 'assets/icons/IconPlay'

const ButtonPlay = ({ className, label = '', handleClick }) => (
  <button
    className={classnames(css.button, className)}
    type='button'
    onClick={handleClick}
  >
    <IconPlay className={css.icon} />
    {label &&
      <span className={css.label}>
        { label }
      </span>
    }
  </button>
)

export default ButtonPlay
