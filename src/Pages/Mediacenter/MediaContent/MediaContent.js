import React, { useState } from 'react'
import css from './MediaContent.module.scss'
import InterviewSpecialists from './InterviewSpecialists/InterviewSpecialists'
import Articles from './Articles/Articles'
import News from './News/News'
import InterviewPatients from 'Pages/Mediacenter/MediaContent/InterviewPatients/InterviewPatients'
import Container from 'components/Grid/Container'
import classnames from 'classnames'

const MediaContent = ({
  specialists,
  articles,
  news,
  patients
}) => {
  const [activeTab, setActiveTab] = useState('all')

  const tabs = [
    {
      label: 'Все',
      type: 'all'
    },
    {
      label: 'Интервью',
      type: 'interviews'
    },
    {
      label: 'Статьи',
      type: 'articles'
    },
    {
      label: 'Новости',
      type: 'news'
    },
  ]

  const tabsList = tabs.map((tab, index) => {
    return (
      <li className={css.item} key={`Tab item #${index}`}>
        <button
          className={classnames(css.tab, { [css.tabActive]: activeTab === tab.type })}
          type='button'
          onClick={() => setActiveTab(tab.type)}
        >
          { tab.label }
        </button>
      </li>
    )
  })

  return (
    <>
      <Container>
        <ul className={css.list}>
          { tabsList }
        </ul>
      </Container>
      {(activeTab === 'all' || activeTab === 'interviews') &&
        <InterviewSpecialists list={specialists} />
      }
      {(activeTab === 'all' || activeTab === 'articles') &&
        <Articles list={articles} />
      }
      {(activeTab === 'all' || activeTab === 'news') &&
        <News list={news.list} image={news.image} />
      }
      {(activeTab === 'all' || activeTab === 'interviews') &&
        <InterviewPatients list={patients} />
      }
    </>
  )
}

export default MediaContent
