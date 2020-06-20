import React, { useEffect, useState } from 'react'
import css from './AccordeonMobile.module.scss'
import { Collapse } from 'react-collapse/lib/Collapse'
import classnames from 'classnames'
import { images } from 'index'
import { isMobileOnly } from 'react-device-detect'

const AccordeonMobile = ({
  backgroundMobile,
  backgroundTablet,
  className,
  children,
  question,
  questionTag = 'p',
  answer,
  answerClassName,
  observer
}) => {
  const [isOpened, updateAccordeonStatus] = useState(false)
  const QuestionTagName = questionTag
  const background = isMobileOnly ? backgroundMobile : backgroundTablet

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
      className={classnames(css.wrapper, className,
        { [css.wrapperOpened]: isOpened },
        { [css.wrapperOpenedBackground]: isOpened && background }
      )}
      onClick={() => handleClickCollapse()}
    >
      <QuestionTagName
        className={css.key}
      >
        <>
          <span>
            { question }
          </span>
          { background &&
          <img
            className={css.background}
            src={images('./' + background)}
            alt={`${question}`}
          />
          }
        </>
      </QuestionTagName>
      <Collapse
        isOpened={isOpened}
      >
        {answer &&
        <div
          className={classnames(css.value, answerClassName)}
          dangerouslySetInnerHTML={{__html: answer}}
        />
        }
        {!answer && children &&
        <div className={classnames(css.value, answerClassName)}>
          { children }
        </div>
        }
      </Collapse>
    </div>
  )
}

export default AccordeonMobile
