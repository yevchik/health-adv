import React from 'react'
import css from './ButtonSlider.module.scss'
import classnames from 'classnames'
import IconArrowRight from 'assets/icons/IconArrowRight'

const ButtonSlider = ({
  className,
  handleClick,
  isDisabled = false,
  type = 'next'
}) => (
  <button
    className={classnames(css.button, className, {
      [css.buttonDisabled]: isDisabled,
      [css.buttonPrev]: type === 'prev',
      [css.buttonNext]: type === 'next'
    })}
    onClick={handleClick}
    type='button'
  >
    { (type === 'next' ? 'Следующий' : 'Предыдущий') + ' слайд' }
    <IconArrowRight className={css.icon} />
  </button>
)

export default React.memo(ButtonSlider)
