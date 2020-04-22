import React, { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import css from './Services.module.scss'
import Container from 'components/Grid/Container'
import Heading from 'components/Heading/Heading'
import Slider from 'components/SliderCards/SliderCards'
import AdvCard from 'components/AdvCard/AdvCard'
import { useSelector } from 'react-redux'

const Services = ({
  className,
  title,
  list,
  ads
}) => {
  const fontSize = useSelector(state => state.elastic.curFontSize)

  const activeTabRef = useRef(null)

  const [activeTab, setActiveTab] = useState(0)
  const [tabContentHeight, setTabContentHeight] = useState(null)

  useEffect(() => {
    setTabContentHeight(activeTabRef.current.getBoundingClientRect().height)
  }, [activeTabRef])

  useEffect(() => {
    setTabContentHeight(activeTabRef.current.getBoundingClientRect().height)
  }, [activeTab, fontSize])

  const handleClickTab = index => {
    setActiveTab(index)
  }

  const setActiveTabRef = el => {
    activeTabRef.current = el
  }

  const tabs = list.map((item, index) => (
    <button
      className={classnames(css.tab, {
        [css.tabActive]: activeTab === index
      })}
      key={index}
      onClick={() => handleClickTab(index)}
    >
      { item.category }
    </button>
  ))

  const tabBlocks = list.map((item, index) => (
    <div
      className={classnames(css.tabBlock, { [css.tabBlockActive]: activeTab === index })}
      key={index}
      ref={index === activeTab ? setActiveTabRef : null}
      >
      <ul className={css.sublist}>
        {item.sublist.map((subitem, subindex) => (
          <li className={css.subitem} key={subindex}>
            { subitem.text }
          </li>
        ))}
      </ul>
    </div>
  ))

  return (
    <section className={className}>
      <Container className={css.container}>
        <Heading content={title} />
        <div className={css.tabs}>
          { tabs }
        </div>
        <div className={css.wrapper}>
          <div className={css.tabContent} style={{ height: tabContentHeight + 'px' }}>
            { tabBlocks }
          </div>
          <div className={css.promo}>
            <Slider>
              {ads.map((item, index) => (
                <div className={css.slide} key={index}>
                  <AdvCard {...item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default React.memo(Services)
