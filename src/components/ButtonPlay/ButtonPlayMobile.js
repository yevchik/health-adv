import React from 'react'
import classnames from 'classnames'
import css from './ButtonPlayMobile.module.scss'
import IconPlay from 'assets/icons/IconPlay'
import PropTypes from 'prop-types'

const ButtonPlayMobile = ({
  className,
  label = '',
  handleClick,
  background = 'none',
  isMinified
}) => (
  <button
    className={classnames(css.button, className,
      { [css.buttonMinified]: isMinified }
    )}
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

ButtonPlayMobile.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  handleClick: PropTypes.func,
  // props for passing background image received from API
  background: PropTypes.string,
}

export default React.memo(ButtonPlayMobile)
