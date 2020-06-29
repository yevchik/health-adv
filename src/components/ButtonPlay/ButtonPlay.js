import React from 'react'
import classnames from 'classnames'
import css from './ButtonPlay.module.scss'
import IconPlay from 'assets/icons/IconPlay'
import PropTypes from 'prop-types'

const ButtonPlay = ({
  className,
  label = '',
  handleClick,
  background = 'none',
  iconType = 'circle',
  isMinified
}) => (
  <button
    className={classnames(css.button, className,
      { [css.buttonSquare]: iconType === 'square' },
      { [css.buttonMinified]: isMinified }
    )}
    type='button'
    onClick={handleClick}
    style={{ backgroundImage: background }}
  >
    <IconPlay className={classnames(css.icon, { [css.iconSquare]: iconType === 'square' })} />
    {label &&
      <span className={css.label}>
        { label }
      </span>
    }
  </button>
)

ButtonPlay.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  handleClick: PropTypes.func,
  // props for passing background image received from API
  background: PropTypes.string,
}

export default React.memo(ButtonPlay)
