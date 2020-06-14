import React from 'react'
import css from './ButtonShowMore.module.scss'
import classnames from 'classnames'

const ButtonShowMore = ({
  className,
  clickHandler = () => {},
}) => {
  return (
    <button
      className={classnames(css.button, className)}
      onClick={clickHandler}
      type='button'
    >
      <span>
        Показать еще
      </span>
    </button>
  )
}

export default ButtonShowMore
