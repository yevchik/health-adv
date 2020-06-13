import React, { useEffect, useState } from 'react'
import css from './AccordeonMobile.module.scss'
import { Collapse } from 'react-collapse/lib/Collapse'
import classnames from 'classnames'

const AccordeonMobile = ({
  className,
  question,
  answer,
  observer
}) => {
  const [isOpened, updateAccordeonStatus] = useState(false)

  useEffect(() => {
    if (observer) {
      observer.push(() => updateAccordeonStatus(false))
    }
  }, [observer])

  const handleClickCollapse = () => {
    if (observer) {
      observer.forEach(handler => handler())
    }
    updateAccordeonStatus(!isOpened)
  }

  return (
    <div
      className={classnames(css.wrapper, className, { [css.wrapperOpened]: isOpened })}
      onClick={() => handleClickCollapse()}
    >
      <p
        className={css.key}
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <Collapse
        isOpened={isOpened}
      >
        <p
          className={css.value}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </Collapse>
    </div>
  )
}

export default AccordeonMobile
