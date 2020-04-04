import React from 'react'
import classnames from 'classnames'
import css from './ButtonPlay.module.scss'
import IconPlay from 'assets/icons/IconPlay'

const ButtonPlay = ({ className, label = '', handleClick, background = 'none' }) => (
  <button
    className={classnames(css.button, className)}
    type='button'
    onClick={handleClick}
    style={{ backgroundImage: background }}
  >
    <IconPlay className={css.icon} />
    {label &&
      <span className={css.label}>
        { label }
      </span>
    }
  </button>
)

export default React.memo(ButtonPlay)
