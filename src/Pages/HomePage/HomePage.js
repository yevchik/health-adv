import React, { Component } from 'react'
// import css from './HomePage.module.scss'
import VideoBanner from 'Pages/HomePage/VideoBanner/VideoBanner'
import Services from 'Pages/HomePage/Services/Services'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.homeData = {
      siteMainCaption: 'Стоматологическая клиника Patterson Dental',
      videoBanner: {
        top: {
          slogan: 'Patterson Dental&nbsp;&mdash;<br>качественная стоматология<br>для Вас',
          previewLabel: 'Посмотрите видео о клинике',
          modalVideo: 'demo_video_1920.mp4',
          modalVideoPreview: 'video__preview.jpg',
        },
        bottom: {
          sloganAdaptive: 'Стоматология для всех',
          sloganDesktop: 'Современная<br>стоматология<br>для всех',
          backgroundMobile: 'bg__video-banner@mobile.jpg',
          backgroundTablet: 'bg__video-banner@tablet.jpg',
          descriptor: 'Новейшее оборудование, опытные доктора, система внутреннего контроля качества услуг',
          videoBg: 'demo_video_1920_2.mp4'
        }
      },
      services: {
        title: 'Услуги',
        list: [
          {
            category: 'Стоматологическое лечение',
            sublist: [
              {
                text: 'Группа 1'
              },
              {
                text: 'Лечение каналов под микроскопом (пульпит, периодонтит)'
              },
              {
                text: 'Лечение кариеса'
              },
              {
                text: 'Лечение каналов под микроскопом (пульпит, периодонтит)'
              },
              {
                text: 'А это очень-очень длинная строка для тестирования компонента на' +
                  ' переполнение контентом'
              },
            ]
          },
          {
            category: 'Косметическая стоматология',
            sublist: [
              {
                text: 'Группа 2'
              },
              {
                text: 'Лечение каналов под микроскопом (пульпит, периодонтит)'
              },
              {
                text: 'Лечение кариеса'
              },
              {
                text: 'Лечение каналов под микроскопом (пульпит, периодонтит)'
              },
              {
                text: 'Лечение кариеса'
              },
            ]
          },
          {
            category: 'Детская стоматология',
            sublist: [
              {
                text: 'Группа 3'
              },
              {
                text: 'Лечение каналов под микроскопом (пульпит, периодонтит)'
              },
              {
                text: 'Лечение кариеса'
              },
              {
                text: 'Лечение каналов под микроскопом (пульпит, периодонтит)'
              },
              {
                text: 'Лечение кариеса'
              },
            ]
          },
        ],
        ads: [
          {
            type: 'teeth',
            url: '/',
            color: '#f4785d',
            duration: 'Акция до 24 января',
            title: 'Керамические виниры',
            price: 'от <span>20 000</span> рублей'
          },
          {
            type: 'implant-single',
            url: '/',
            color: '#c58ddf',
            duration: 'Акция до 24 января',
            title: 'Имплант с&nbsp;установкой',
            price: 'от <span>95 000</span> рублей'
          },
          {
            type: 'implants-jaw',
            url: '/',
            color: '#c58ddf',
            duration: 'Акция до 24 января',
            title: 'Все зубы сразу «под ключ»',
            price: 'от <span>120 000</span> рублей'
          },
          {
            type: 'implant-single',
            url: '/',
            color: '#7486e6',
            duration: 'Акция до 24 января',
            title: 'Имплант с&nbsp;установкой',
            price: 'от <span>95 000</span> рублей'
          },
        ]
      }
    }
  }

  render () {
    return (
      <main>
        <h1 className='visuallyHidden'>
          { this.homeData.siteMainCaption }
        </h1>
        <VideoBanner {...this.homeData.videoBanner} />
        <Services {...this.homeData.services} />
      </main>
    )
  }
}

export default HomePage
