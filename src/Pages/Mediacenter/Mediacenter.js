import React, { useEffect, useRef } from 'react'
import Banner from 'components/Banner/Banner'
import { HOME_PAGE } from 'Pages/Routes'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import css from './Mediacenter.module.scss'
import MediaContent from 'Pages/Mediacenter/MediaContent/MediaContent'
import Modal from 'components/Modal/Modal'
import { videos } from 'index'
import { useDispatch, useSelector } from 'react-redux'
import { closeVideoModal } from 'store/actions'

const Mediacenter = () => {
  const mediaData = {
    banner: {
      bgImage: 'media__banner@desktop.jpg',
      title: 'Медиацентр',
      descriptor: 'В&nbsp;данном разделе вы&nbsp;можете более подробно ознамиться с&nbsp;тем, как проходят те&nbsp;или иные процедуры. Все статьи прошли проверку медицинских специалистов.'
    },
    interviewsSpecialists: [
      {
        label: 'Какую зубную щетку использовать электронную или обычную?',
        date: '10 января 2020',
        previewImage: 'media__specialists-preview--1@desktop.jpg',
        video: 'demo_video_1920_2.mp4'
      },
      {
        label: 'Какую зубную щетку использовать электронную или обычную?',
        date: '10 января 2020',
        previewImage: 'media__specialists-preview--2@desktop.jpg',
        video: 'demo_video_1920_2.mp4'
      },
      {
        label: 'Какую зубную щетку использовать электронную или обычную?',
        date: '10 января 2020',
        previewImage: 'media__specialists-preview--3@desktop.jpg',
        video: 'demo_video_1920_2.mp4'
      },
      {
        label: 'Какую зубную щетку использовать электронную или обычную?',
        date: '10 января 2020',
        previewImage: 'media__specialists-preview--4@desktop.jpg',
        video: 'demo_video_1920_2.mp4'
      },
    ],
    articles: [
      {
        label: 'Какую зубную щетку использовать электронную или обычную?',
        date: '10 января 2020',
        url: '/'
      },
      {
        label: 'Какую зубную щетку использовать электронную или обычную?',
        date: '10 января 2020',
        url: '/'
      },
      {
        label: 'Какую зубную щетку использовать электронную или обычную?',
        date: '10 января 2020',
        url: '/'
      },
    ],
    news: {
      image: 'media__news-bg@desktop.jpg',
      list: [
        {
          label: 'Какую зубную щетку использовать электронную или обычную?',
          date: '10 января 2020',
          url: '/'
        },
        {
          label: 'Какую зубную щетку использовать электронную или обычную?',
          date: '10 января 2020',
          url: '/'
        },
        {
          label: 'Какую зубную щетку использовать электронную или обычную?',
          date: '10 января 2020',
          url: '/'
        },
        {
          label: 'Какую зубную щетку использовать электронную или обычную?',
          date: '10 января 2020',
          url: '/'
        },
      ]
    },
    interviewsPatients: [
      {
        label: 'Какую зубную щетку использовать электронную или обычную?',
        date: '10 января 2020',
        previewImage: 'media__patients-preview--1@desktop.jpg',
        video: 'demo_video_1920_2.mp4'
      },
      {
        label: 'Какую зубную щетку использовать электронную или обычную?',
        date: '10 января 2020',
        previewImage: 'media__patients-preview--2@desktop.jpg',
        video: 'demo_video_1920_2.mp4'
      },
      {
        label: 'Какую зубную щетку использовать электронную или обычную?',
        date: '10 января 2020',
        previewImage: 'media__patients-preview--3@desktop.jpg',
        video: 'demo_video_1920_2.mp4'
      },
      {
        label: 'Какую зубную щетку использовать электронную или обычную?',
        date: '10 января 2020',
        previewImage: 'media__patients-preview--4@desktop.jpg',
        video: 'demo_video_1920_2.mp4'
      },
    ],
  }

  const breadcrumbs = [
    {
      label: 'Главная',
      url: HOME_PAGE
    },
    {
      label: 'Медиацентр'
    }
  ]

  const modal = useSelector(state => state.ui)
  const dispatch = useDispatch();
  const videoRef = useRef(null)

  useEffect(() => {
    // reset video playtime in modal when it opens
    if (modal.isModalOpen) {
      videoRef.current.load()
    }
  }, [modal.isModalOpen])

  return (
    <>
      <Banner {...mediaData.banner} />
      <Breadcrumbs dataArray={breadcrumbs} className={css.breadcrumbs} />
      <MediaContent
        specialists={mediaData.interviewsSpecialists}
        articles={mediaData.articles}
        news={mediaData.news}
        patients={mediaData.interviewsPatients}
      />
      <Modal isVisible={modal.isModalOpen} handleCloseModal={() => dispatch(closeVideoModal())}>
        <video className={css.video} controls autoPlay ref={videoRef}>
          {modal.videoFile && <source src={videos('./' + modal.videoFile)} />}
        </video>
      </Modal>
    </>
  )
}

export default Mediacenter
