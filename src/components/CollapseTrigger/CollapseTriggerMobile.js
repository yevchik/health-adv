import React from 'react'
import css from './CollapseTriggerMobile.module.scss'
import classnames from 'classnames'
import IconPlus from 'assets/icons/IconPlus'
import PropTypes from 'prop-types'

const CollapseTriggerMobile = ({
  handleClickTrigger,
  isActive,
  label
}) => {
  return (
    <button
      className={classnames(css.trigger, {
        [css.triggerOpened]: isActive
      })}
      onClick={handleClickTrigger}
    >
        <span className={css.label}>
          { label }
        </span>
      <IconPlus className={css.icon} />
    </button>
  )
}

CollapseTriggerMobile.propTypes = {
  // button click handler
  handleClickTrigger: PropTypes.func.isRequired,
  // tab status
  isActive: PropTypes.bool,
  // text label inside the button
  label: PropTypes.string.isRequired
}

export default React.memo(CollapseTriggerMobile)
