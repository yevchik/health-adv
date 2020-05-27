import React from 'react'
import css from './DoctorTopic.module.scss'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import { openImageModal, openVideoModal } from 'store/actions'
import { useDispatch } from 'react-redux'
import { images } from 'index'
import SliderCards from 'components/SliderCards/SliderCards'
import { createSubArrays } from 'utils'

const DoctorTopic = ({
  data
}) => {
  const { type, title, data: topicData } = data
  const dispatch = useDispatch()

  switch (type) {
    case 'expertise':
      return (
        <>
          <h3 className={css.title}>
            { title }
          </h3>
          <ul className={css.expertiseList}>
            {topicData.list.map((item, index) => (
              <li className={css.expertiseItem} key={`Expertise item #${index}`}>
                { item }
              </li>
            ))}
          </ul>
        </>
      )
    case 'about':
      return (
        <>
          <h3 className={css.title}>
            { title }
          </h3>
          <blockquote className={css.quote} dangerouslySetInnerHTML={{ __html: topicData.quote }} />
          <div className={css.playWrapper}>
            <ButtonPlay
              className={css.play}
              background={`url("${images('./' + topicData.video.preview)}")`}
              handleClick={() => dispatch(openVideoModal(topicData.video.file))}
            />
          </div>
        </>
      )
    case 'education':
    case 'experience':
      return (
        <>
          <h3 className={css.title}>
            { title }
          </h3>
          <dl className={css.listDef}>
            {topicData.list.map((item, index) => (
              <React.Fragment key={`Definition list item #${index}`}>
                <dt className={css.key} dangerouslySetInnerHTML={{ __html: item.key }} />
                <dd className={css.value} dangerouslySetInnerHTML={{ __html: item.value }} />
              </React.Fragment>
            ))}
          </dl>
        </>
      )
    case 'docs':
      const groupedList = createSubArrays(topicData.list, 2)
      return (
        <>
          <h3 className={css.title}>
            { title }
          </h3>
          <SliderCards
            className={css.slider}
            controlsType='styledNoFractions'
            slides={2}
          >
            {groupedList.map((slide, index) => (
              <div className={css.slide} key={`Doc slider item#${index}`}>
                {slide.map((item, subindex) => (
                  <img
                    src={images('./' + item.image)}
                    className={css.image}
                    alt={item.label}
                    key={`Document item ${index}-${subindex}`}
                    onClick={() => dispatch(openImageModal(item.image))}
                  />
                ))}
              </div>
            ))}
          </SliderCards>
        </>
      )
    case 'reviews':
      const slides = topicData.list.map((slide, index) => (
        <div className={css.review} key={`Review slide#${index}`}>
          <div className={css.reviewIntro}>
            <p className={css.name}>
              { slide.name },
            </p>
            <p className={css.date}>
              { slide.date }
            </p>
          </div>
          <p className={css.reviewContent} dangerouslySetInnerHTML={{ __html: slide.text }} />
          <div className={css.reviewInfo}>
            <p className={css.reviewExpertise}>
              Услуги: { slide.services }
            </p>
            <p className={css.reviewSpecialist}>
              Специалист: { slide.specialist }
            </p>
          </div>
        </div>
      ))
      return (
        <>
          <h3 className={css.title}>
            { title }
          </h3>
          <SliderCards
            className={css.sliderReviews}
            controlsType='styled'
            slides={1}
          >
            { slides }
          </SliderCards>
        </>
      )
    default:
      return null
  }
}

export default DoctorTopic
