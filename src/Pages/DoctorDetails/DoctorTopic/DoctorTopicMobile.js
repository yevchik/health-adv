import React, { useState } from 'react'
import css from './DoctorTopicMobile.module.scss'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import { openImageModal, openVideoModal } from 'store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { images } from 'index'
import { Collapse } from 'react-collapse'
import classnames from 'classnames'
import SliderCardsMobile from 'components/SliderCards/SliderCardsMobile'
import TopicPortfolioMobile
  from 'Pages/DoctorDetails/DoctorTopic/TopicPortfolio/TopicPortfolioMobile'
import BlockWithPhotoMobile from 'Pages/AboutUs/BlockWithPhoto/BlockWithPhotoMobile'
import TopicFAQMobile from 'Pages/DoctorDetails/DoctorTopic/TopicFAQ/TopicFAQMobile'
import TopicPricelistMobile
  from 'Pages/DoctorDetails/DoctorTopic/TopicPricelist/TopicPricelistMobile'
import BlockGalleryMobile from 'Pages/AboutUs/BlockGallery/BlockGalleryMobile'
import TopicAdviseMobile from 'Pages/DoctorDetails/DoctorTopic/TopicAdvise/TopicAdviseMobile'

const DoctorTopicMobile = ({
  data
}) => {
  const deviceType = useSelector(state => state.elastic.deviceType)
  const [isCollapseAboutOpened, setCollapseAboutOpened] = useState(false)
  const [isCollapseExperienceOpened, setCollapseExperienceOpened] = useState(false)
  const { type, title, data: topicData } = data
  const dispatch = useDispatch()

  switch (type) {
    case 'expertise':
      return (
        <div>
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
        </div>
      )
    case 'about':
      return (
        <div className={css.wrapper}>
          <h3 className={css.title}>
            { title }
          </h3>
          <Collapse
            isOpened={isCollapseAboutOpened || deviceType === 'tablet'}
            theme={{ collapse: isCollapseAboutOpened ? classnames('ReactCollapse--collapse', css.collapseOpened) : 'ReactCollapse--collapse' }}
          >
            <blockquote className={css.quote} dangerouslySetInnerHTML={{ __html: topicData.quote }} />
          </Collapse>
          <button
            className={classnames(css.btnCollapseAbout, { [css.btnAboutOpened]: isCollapseAboutOpened })}
            onClick={() => setCollapseAboutOpened(prevState => !prevState)}
            type='button'
          >
            Показать все
          </button>
          <div className={css.playWrapper}>
            <ButtonPlay
              className={css.play}
              background={`url("${images('./' + topicData.video.preview)}")`}
              handleClick={() => dispatch(openVideoModal(topicData.video.file))}
            />
          </div>
        </div>
      )
    case 'education':
      return (
        <div>
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
        </div>
      )
    case 'experience':
      return (
        <div className={css.wrapperExperience}>
          <h3 className={css.title}>
            { title }
          </h3>
          <Collapse
            isOpened={isCollapseExperienceOpened}
            theme={{ collapse: isCollapseExperienceOpened ? classnames('ReactCollapse--collapse', css.collapseOpened) : 'ReactCollapse--collapse' }}
          >
            <dl className={css.listDef}>
              {topicData.list.map((item, index) => (
                <React.Fragment key={`Definition list item #${index}`}>
                  <dt className={css.key} dangerouslySetInnerHTML={{ __html: item.key }} />
                  <dd className={css.value} dangerouslySetInnerHTML={{ __html: item.value }} />
                </React.Fragment>
              ))}
            </dl>
          </Collapse>
          <button
            className={classnames(css.btnCollapseExperience, { [css.btnExperienceOpened]: isCollapseExperienceOpened })}
            onClick={() => setCollapseExperienceOpened(prevState => !prevState)}
            type='button'
          >
            Показать все
          </button>
        </div>
      )
    case 'docs':
      return (
        <div>
          <h3 className={css.title}>
            { title }
          </h3>
          <SliderCardsMobile
            className={css.slider}
          >
            {topicData.list.map((slide, index) => (
              <div className={css.slide} key={`Doc slider item#${index}`}>
                <img
                  src={images('./' + slide.image)}
                  className={css.image}
                  alt={slide.label}
                  key={`Document item ${index}-${index}`}
                  onClick={() => dispatch(openImageModal(slide.image))}
                />
              </div>
            ))}
          </SliderCardsMobile>
        </div>
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
        <div>
          <h3 className={css.title}>
            { title }
          </h3>
          <SliderCardsMobile
            className={classnames(css.slider, css.sliderReviews)}
          >
            { slides }
          </SliderCardsMobile>
        </div>
      )
    case 'text':
      return (
        <>
          <h3 className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
          <div className={css.text} dangerouslySetInnerHTML={{ __html: topicData }} />
        </>
      )
    case 'portfolio':
      return (
        <TopicPortfolioMobile
          title={title}
          list={topicData}
        />
      )
    case 'interview':
      return (
        <BlockWithPhotoMobile
          className={css.interview}
          data={data}
        />
      )
    case 'faq':
      return (
        <TopicFAQMobile
          title={title}
          topicData={topicData}
        />
      )
    case 'pricelist':
      return (
        <TopicPricelistMobile
          title={title}
          topicData={topicData}
        />
      )
    case 'gallery':
      return (
        <BlockGalleryMobile
          className={css.gallery}
          data={data}
        />
      )
    case 'advise':
      return (
        <TopicAdviseMobile
          title={title}
          topicData={topicData}
        />
      )
    default:
      return null
  }
}

export default DoctorTopicMobile
