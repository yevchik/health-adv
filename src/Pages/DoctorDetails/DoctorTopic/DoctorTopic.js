import React from 'react'
import css from './DoctorTopic.module.scss'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import { openImageModal, openVideoModal } from 'store/actions'
import { useDispatch } from 'react-redux'
import { images } from 'index'
import SliderCards from 'components/SliderCards/SliderCards'
import { createSubArrays } from 'utils'
import PortfolioCard from 'components/PortfolioCard/PortfolioCard'
import BlockWithPhoto from 'Pages/AboutUs/BlockWithPhoto/BlockWithPhoto'
import Accordeon from 'components/Accordeon/Accordeon'
import TableRow from 'components/TableRow/TableRow'
import BlockGallery from 'Pages/AboutUs/BlockGallery/BlockGallery'
import AdviseCard from 'components/AdviseCard/AdviseCard'

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
    case 'text':
      return (
        <>
          <h3 className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
          <div className={css.text} dangerouslySetInnerHTML={{ __html: topicData }} />
        </>
      )
    case 'portfolio':
      return (
        <>
          <ul className={css.portfolioList}>
            {topicData.map(({ image, label }, index) => (
              <li className={css.portfolioItem} key={`Portfolio item#${index}`}>
                <PortfolioCard
                  img={image}
                  label={label}
                />
              </li>
            ))}
          </ul>
        </>
      )
    case 'interview':
      return (
        <BlockWithPhoto
          className={css.interview}
          data={data}
        />
      )
    case 'faq':
      const observer = []

      return (
        <>
          <h3 className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
          <ul className={css.accordeons}>
            { topicData.map((item, index) => (
              <li className={css.accordeon} key={`Accordeon item#${index}`}>
                <Accordeon
                  observer={observer}
                  question={item.key}
                  answer={item.value}
                />
              </li>
            )) }
          </ul>
        </>
      )
    case 'pricelist':
      return (
        <>
          <h3 className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
          <table className={css.table}>
            <tbody>
              {topicData.map((row, index) => (
                <TableRow
                  cellKey={row.key}
                  cellValue={row.value}
                  index={index}
                  key={`Pricelist table row#${index}`}
                />
              ))}
            </tbody>
          </table>
        </>
      )
    case 'gallery':
      return (
        <BlockGallery
          className={css.gallery}
          data={data}
        />
      )
    case 'advise':
      return (
        <>
          <h3 className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
          <ul className={css.advisedList}>
            {topicData.map((card, index) => (
              <li className={css.advisedItem} key={`Advised item#${index}`}>
                <AdviseCard
                  label={card.label}
                  url={card.url}
                />
              </li>
            ))}
          </ul>
        </>
      )
    default:
      return null
  }
}

export default DoctorTopic
