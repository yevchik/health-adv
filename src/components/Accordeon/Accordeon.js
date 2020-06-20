import React, { useEffect, useState } from 'react'
import css from './Accordeon.module.scss'
import { Collapse } from 'react-collapse/lib/Collapse'
import classnames from 'classnames'
import { images } from 'index'

const Accordeon = ({
  background,
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
          { question }
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

export default Accordeon
