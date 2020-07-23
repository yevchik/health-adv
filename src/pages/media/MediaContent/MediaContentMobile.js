import React, { useState } from 'react'
import css from './MediaContentMobile.module.scss'
import InterviewSpecialistsMobile from './InterviewSpecialists/InterviewSpecialistsMobile'
import classnames from 'classnames'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'
import ArticlesMobile from './Articles/ArticlesMobile'
import NewsMobile from './News/NewsMobile'
import InterviewPatientsMobile from './InterviewPatients/InterviewPatientsMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'

const MediaContentMobile = ({
  specialists,
  articles,
  news,
  patients,
  breadcrumbs
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
    <div className={css.wrapper}>
      <ContainerMobile>
        <BreadcrumbsMobile dataArray={breadcrumbs} />
      </ContainerMobile>
      <div className={css.tabsWrapper}>
        <ul className={css.list}>
          { tabsList }
        </ul>
      </div>
      {(activeTab === 'all' || activeTab === 'interviews') &&
        <InterviewSpecialistsMobile list={specialists} />
      }
      {(activeTab === 'all' || activeTab === 'articles') &&
        <ArticlesMobile list={articles} />
      }
      {(activeTab === 'all' || activeTab === 'news') &&
        <NewsMobile list={news.list} imageMobile={news.imageMobile} imageTablet={news.imageTablet} />
      }
      {(activeTab === 'all' || activeTab === 'interviews') &&
        <InterviewPatientsMobile list={patients} />
      }
    </div>
  )
}

export default MediaContentMobile
