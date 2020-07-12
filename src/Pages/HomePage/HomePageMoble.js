import React from 'react'
import VideoBannerMobile from 'Pages/HomePage/VideoBanner/VideoBannerMobile'
import ServicesMobile from 'Pages/HomePage/Services/ServicesMobile'
import ReviewBannerMobile from 'Pages/HomePage/ReviewBanner/ReviewBannerMobile'
import SliderDoctorsMobile from 'Pages/HomePage/SliderDoctors/SliderDoctorsMobile'
import TestBannerMobile from 'components/TestBanner/TestBannerMobile'
import AboutMobile from 'Pages/HomePage/About/AboutMobile'
import ReviewsMobile from 'Pages/HomePage/Reviews/ReviewsMobile'
import AdvantagesMobile from 'Pages/HomePage/Advantages/AdvantagesMobile'
import LicenseMobile from 'Pages/HomePage/License/LicenseMobile'
import withModalMobile from 'hoc/withModalMobile'

const HomePageMobile  = () => {
  const homeData = {
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
    },
    reviewBanner: {
      bgImages: {
        mobile: 'review-banner__bg@mobile.jpg',
        tablet: 'review-banner__bg@tablet.jpg',
        desktop: 'review-banner__bg@desktop.jpg'
      },
      quote: 'Если вы&nbsp;боитесь стоматолога, это то&nbsp;место, куда нужно идти, потому что' +
        ' команда здесь делает все возможное, чтобы вы&nbsp;чувствовали себя комфортно и&nbsp;уютно',
      author: 'Наталья Ткач, 11&nbsp;августа 2019'
    },
    sliderDoctors: {
      title: 'Врачи',
      list: [
        {
          url: '/doctor',
          name: 'Смолов Виктор Николаевич 1',
          expertise: 'Стоматолог-терапевт',
          address: 'Москва, 1-й Бабьегородский пер., д.&nbsp;28',
          photo: 'slider-doctors__photo.png',
          quote: 'Для меня самое главное построить доверительные и&nbsp;долгосрочные отношения с&nbsp;нашими маленькими пациентами.'
        },
        {
          url: '/',
          name: 'Алабердыев Сулейман Пантелеймонович',
          expertise: 'Стоматолог-терапевт',
          address: 'Москва, 1-й Бабьегородский пер., д.&nbsp;28',
          photo: 'slider-doctors__photo.png',
          quote: 'Для меня самое главное построить доверительные и&nbsp;долгосрочные отношения' +
            ' с&nbsp;нашими маленькими пациентами. Для меня самое главное построить доверительные и&nbsp;долгосрочные отношения с&nbsp;нашими маленькими пациентами.'
        },
        {
          url: '/',
          name: 'Смолов Виктор Николаевич 3',
          expertise: 'Стоматолог-терапевт',
          address: 'Москва, 1-й Бабьегородский пер., д.&nbsp;28',
          photo: 'slider-doctors__photo.png',
          quote: 'Для меня самое главное построить доверительные и&nbsp;долгосрочные отношения с&nbsp;нашими маленькими пациентами.'
        },
        {
          url: '/',
          name: 'Смолов Виктор Николаевич 4',
          expertise: 'Стоматолог-терапевт',
          address: 'Москва, 1-й Бабьегородский пер., д.&nbsp;28',
          photo: 'slider-doctors__photo.png',
          quote: 'Для меня самое главное построить доверительные и&nbsp;долгосрочные отношения с&nbsp;нашими маленькими пациентами.'
        },
        {
          url: '/',
          name: 'Смолов Виктор Николаевич 5',
          expertise: 'Стоматолог-терапевт',
          address: 'Москва, 1-й Бабьегородский пер., д.&nbsp;28',
          photo: 'slider-doctors__photo.png',
          quote: 'Для меня самое главное построить доверительные и&nbsp;долгосрочные отношения с&nbsp;нашими маленькими пациентами.'
        },
      ]
    },
    testBanner: {
      title: 'Не&nbsp;знаете, какая услуга нужна?',
      descriptor: 'Пройдите тест, ответив на&nbsp;несколько вопросов'
    },
    about: {
      title: 'О клинике',
      descriptor: 'Наших специалистов отличает большой опыт работы и&nbsp;хорошее образование.' +
        ' Кроме того, они постоянно повышают свою квалификацию, проходя обучение и&nbsp;стажировки как в&nbsp;России, так и&nbsp;за&nbsp;рубежом.',
      feature: {
        subtitle: 'Безопасность',
        descriptor: '<p>Важнейшими принципами нашей работы являются сохранение зубов, полная безболезненность, инфекционная безопасность и&nbsp;медицинская гарантия всех лечебно-диагностических манипуляций</p><p>Отдельный стерилизационный кабинет в&nbsp;автоклавами класса&nbsp;В (самый высокий класс стерилизации). Мы&nbsp;используем в&nbsp;работе изделия однократного применения. Все применяемые медикаменты сертифицированы и&nbsp;любой документ по&nbsp;сертификации может быть предоставлен по&nbsp;требованию.</p>'
      },
      offices: {
        subtitle: 'Наши филиалы',
        list: [
          'Москва, 1-й Бабьегородский пер., д.&nbsp;28',
          'Москва, ул. Беговая 3&nbsp;ст.1',
          'Москва, ул. Вилиса Лациса 17&nbsp;к.&nbsp;1'
        ]
      },
      map: {
        markers: [
          [55.822276, 37.638983],
          [55.854733, 37.424750],
          [55.885560, 37.644781]
        ],
        center: [55.854481, 37.563757],
        zoom: 10
      }
    },
    reviews: {
      title: 'Отзывы',
      list: [
        {
          name: 'Дмитрий Ткач',
          date: '11 августа 2018',
          text: 'Мне нужно было ставить брекет систему, я&nbsp;всячески противилась этому факту \n' +
            'На&nbsp;меня не&nbsp;действовали никакие уговоры, ни&nbsp;о&nbsp;полезности' +
            ' а&nbsp;дальше идет текст, который обрезается при публикации в&nbsp;карточке на&nbsp;главной в&nbsp;разделе &laquo;Отзывы&raquo;',
          specialist: 'Кирова Ирина Михайловна',
          services: 'Профилактика',
          video: 'demo_video_1920.mp4',
          preview: 'review-slider__preview.jpg'
        },
        {
          name: 'Дмитрий Ткач',
          date: '12 августа 2018',
          text: 'Очень короткий текст отзыва буквально на несколько строк',
          specialist: 'Кирова Ирина Михайловна',
          services: 'Профилактика',
          preview: 'review-slider__preview.jpg'
        },
        {
          name: 'Дмитрий Ткач',
          date: '12 августа 2018',
          text: 'Мне нужно было ставить брекет систему, я&nbsp;всячески противилась этому факту. На&nbsp;меня не&nbsp;действовали никакие уговоры, ни&nbsp;о&nbsp;полезности дальше идет текст, который обрезается при публикации в&nbsp;карточке на&nbsp;главной в&nbsp;разделе &laquo;Отзывы&raquo;. Мне нужно было ставить брекет систему, я&nbsp;всячески противилась этому факту. На&nbsp;меня не&nbsp;действовали никакие уговоры, ни&nbsp;о&nbsp;полезности дальше идет текст, который обрезается при публикации в&nbsp;карточке на&nbsp;главной в&nbsp;разделе &laquo;Отзывы&raquo;. Мне нужно было ставить брекет систему, я&nbsp;всяческ',
          specialist: 'Кирова Ирина Михайловна',
          services: 'Профилактика',
          video: 'demo_video_1920.mp4',
          preview: 'review-slider__preview.jpg'
        },
      ]
    },
    advantages: {
      title: 'Преймущества',
      list: [
        {
          subtitle: 'Помогаем в&nbsp;сложных случаях',
          descriptor: 'Решаем сложные проблемы комплексно, оптимальное решение и&nbsp;план лечения разрабатывают несколько специалистов'
        },
        {
          subtitle: 'Врачи с&nbsp;опытом от&nbsp;8&nbsp;до&nbsp;30&nbsp;лет',
          descriptor: 'У&nbsp;нас работают только профессионалы с&nbsp;большим клиническим опытом и&nbsp;безупречной репутацией, подтверждённой временем'
        },
        {
          subtitle: 'Выступаем на&nbsp;конференциях',
          descriptor: 'Часто выступаем спикерами на&nbsp;стоматологических форумах и&nbsp;обмениваемся знаниями с&nbsp;коллегами'
        },
        {
          subtitle: 'Только необходимые услуги',
          descriptor: 'Никогда не&nbsp;навязываем лишние услуги. Практикуем только честный подход \n' +
            'и&nbsp;персонально составляем план лечения, который разработан с&nbsp;учётом особенностей конкретного случая.'
        },
        {
          subtitle: 'Понятные цены',
          descriptor: 'Детальный финансовый план лечения прописан в&nbsp;договоре, и&nbsp;после его подписания стоимость работ не&nbsp;может измениться. Никаких неожиданных нюансов в&nbsp;виде сносок, дополнительных условий скрытых платежей!'
        },
        {
          subtitle: 'Лечение в&nbsp;рассрочку',
          descriptor: 'Лечение дёсен и&nbsp;зубов нельзя переносить, т.к. это может привести к&nbsp;осложнениям. Заботимся о&nbsp;вас, поэтому предлагаем возможность оплатить услуги в&nbsp;рассрочку. Лечитесь сейчас, оплачивайте потом.'
        },
      ]
    },
    license: {
      title: 'Лицензии',
      list: [
        {
          label: 'Приложение &#8470;&nbsp;1&nbsp;к лицензии &#8470; ФС-99-02-005179',
          previewImage: 'license__preview.jpg',
          fullImage: 'license__full.jpg'
        },
        {
          label: 'Приложение &#8470;&nbsp;1&nbsp;к лицензии &#8470; ФС-99-02-005179',
          previewImage: 'license__preview.jpg',
          fullImage: 'license__full.jpg'
        },
        {
          label: 'Приложение &#8470;&nbsp;1&nbsp;к лицензии &#8470; ФС-99-02-005179',
          previewImage: 'license__preview.jpg',
          fullImage: 'license__full.jpg'
        },
        {
          label: 'Приложение &#8470;&nbsp;1&nbsp;к лицензии &#8470; ФС-99-02-005179',
          previewImage: 'license__preview.jpg',
          fullImage: 'license__full.jpg'
        },
        {
          label: 'Приложение &#8470;&nbsp;1&nbsp;к лицензии &#8470; ФС-99-02-005179',
          previewImage: 'license__preview.jpg',
          fullImage: 'license__full.jpg'
        },
        {
          label: 'Приложение &#8470;&nbsp;1&nbsp;к лицензии &#8470; ФС-99-02-005179',
          previewImage: 'license__preview.jpg',
          fullImage: 'license__full.jpg'
        },
      ]
    }
  }

  return (
    <main>
      <h1 className='visuallyHidden'>
        { homeData.siteMainCaption }
      </h1>
      <VideoBannerMobile {...homeData.videoBanner} />
      <ServicesMobile {...homeData.services} />
      <ReviewBannerMobile {...homeData.reviewBanner} />
      <SliderDoctorsMobile {...homeData.sliderDoctors} />
      <TestBannerMobile {...homeData.testBanner} />
      <AboutMobile {...homeData.about} />
      <ReviewsMobile {...homeData.reviews} />
      <AdvantagesMobile {...homeData.advantages} />
      <LicenseMobile {...homeData.license} />
      <TestBannerMobile {...homeData.testBanner} type='simple' />
    </main>
  )
}

export default React.memo(withModalMobile(HomePageMobile))
