import React from 'react'
import Banner from 'components/Banner/Banner'
import css from './Article.module.scss'
import IconClock from 'assets/icons/IconClock'
import { ARTICLE, HOME_PAGE } from 'Pages/Routes'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import Container from 'components/Grid/Container'
import ContentWithSidebar from 'Pages/DoctorDetails/ContentWithSidebar/ContentWithSidebar'
import withModal from 'hoc/withModal'

const Article = () => {
  const articleData = {
    banner: {
      bgImage: 'article__banner@desktop.jpg',
      title: 'Профессиональная<br/>чистка зубов',
      descriptor: 'Гигиеническая чистка зубов&nbsp;&mdash; эффективный способ устранения зубного налета и&nbsp;зубного камня, а&nbsp;также профилактика кариеса и&nbsp;воспалительных заболеваний десен.',
      comment: 'Время проведения процедуры: 45&ndash;60 минут'
    },
    content: [
      {
        type: 'text',
        tab: 'Описание процедуры',
        title: 'Зачем нужна<br/>профчистка зубов?',
        data:
          `<div>
            <p>В&nbsp;результате проф. чистки зубов снимаются зубные отложения и&nbsp;зубные камни, очищается пришеечная область в&nbsp;труднодоступных местах. Кроме эстетического эффекта проф. гигиеническая чистка зубов помогает устранить неприятный запах изо рта и&nbsp;предупредить возникновение воспалительных процессов, приводящих к&nbsp;расшатыванию и&nbsp;выпадению зубов</p>
            <p>1Дело в&nbsp;том, что как&nbsp;бы тщательно вы&nbsp;не&nbsp;очищали свои зубы дома, стоматологу всё равно будет над чем поработать во&nbsp;время профгигиены. Помимо видимого зубного налёта есть ещё и&nbsp;поддесневой налёт, куда пока не&nbsp;доберётся ни&nbsp;одна зубная щётка в&nbsp;мире.</p>
            <p>2Дело в&nbsp;том, что как&nbsp;бы тщательно вы&nbsp;не&nbsp;очищали свои зубы дома, стоматологу всё равно будет над чем поработать во&nbsp;время профгигиены. Помимо видимого зубного налёта есть ещё и&nbsp;поддесневой налёт, куда пока не&nbsp;доберётся ни&nbsp;одна зубная щётка в&nbsp;мире.</p>
          </div>
          <div>
            <p>3Дело в&nbsp;том, что как&nbsp;бы тщательно вы&nbsp;не&nbsp;очищали свои зубы дома, стоматологу всё равно будет над чем поработать во&nbsp;время профгигиены. Помимо видимого зубного налёта есть ещё и&nbsp;поддесневой налёт, куда пока не&nbsp;доберётся ни&nbsp;одна зубная щётка в&nbsp;мире.</p>
            <p>4Дело в&nbsp;том, что как&nbsp;бы тщательно вы&nbsp;не&nbsp;очищали свои зубы дома, стоматологу всё равно будет над чем поработать во&nbsp;время профгигиены. Помимо видимого зубного налёта есть ещё и&nbsp;поддесневой налёт, куда пока не&nbsp;доберётся ни&nbsp;одна зубная щётка в&nbsp;мире.</p>
          </div>`,
      },
      {
        type: 'portfolio',
        tab: 'Портфолио работ',
        data: [
          {
            image: 'article__illustration--1@desktop.jpg',
            label: 'Постановка диагноза, определение степени тяжести'
          },
          {
            image: 'article__illustration--2@desktop.jpg',
            label: 'Профессиональная гигиена полости рта'
          },
          {
            image: 'article__illustration--3@desktop.jpg',
            label: 'Подбор индивидуальных средств гигиены'
          },
        ]
      },
      {
        type: 'interview',
        tab: 'Подготовка',
        title: 'Подготовка<br/>к процедуре',
        data: {
          description: `
            <p>Не&nbsp;рекомендуется без согласования с&nbsp;врачом проводить сложные стоматологические манипуляции накануне гигиенической чистки.</p>
            <p>Воздержитесь от&nbsp;приема алкогольных напитков минимум за&nbsp;48&nbsp;часов до&nbsp;чистки.</p>
            <p>Если вы&nbsp;не&nbsp;уверены, какая манипуляция требуется в&nbsp;первую очередь,&nbsp;&mdash; лечение или гигиеническая чистка, проконсультируйтесь со&nbsp;специалистом, который в&nbsp;зависимости от&nbsp;масштаба имеющейся проблемы примет взвешенное решение.</p>
          `,
          doctor: {
            photo: 'doctor__about-advice1@desktop.jpg',
            name: 'Смолов Виктор Николаевич',
            rank: 'Стоматолог-ортопед, стоматолог-хирург'
          }
        },
      },
      {
        type: 'faq',
        tab: 'Вопросы и ответы',
        title: 'Частые вопросы<br/>о профессиональной<br/>чистке зубов',
        data: [
          {
            key: 'Правда&nbsp;ли что, отбеливание повреждает эмаль?',
            value: 'Что касается мнения о&nbsp;болезненности отбеливания зубов, то&nbsp;это относится только к&nbsp;химическим методам и&nbsp;только в&nbsp;случае истончения и&nbsp;эрозии эмали, патологического стирания и&nbsp;наличия трещин, и&nbsp;как следствие&nbsp;&mdash; гипертензии, или повышенной чувствительности зубов.'
          },
          {
            key: 'Какую зубную щетку использовать электронную или обычную?',
            value: 'Что касается мнения о&nbsp;болезненности отбеливания зубов, то&nbsp;это относится только к&nbsp;химическим методам и&nbsp;только в&nbsp;случае истончения и&nbsp;эрозии эмали, патологического стирания и&nbsp;наличия трещин, и&nbsp;как следствие&nbsp;&mdash; гипертензии, или повышенной чувствительности зубов.'
          },
          {
            key: 'Какую зубную щетку использовать электронную или обычную?',
            value: 'Что касается мнения о&nbsp;болезненности отбеливания зубов, то&nbsp;это относится только к&nbsp;химическим методам и&nbsp;только в&nbsp;случае истончения и&nbsp;эрозии эмали, патологического стирания и&nbsp;наличия трещин, и&nbsp;как следствие&nbsp;&mdash; гипертензии, или повышенной чувствительности зубов.'
          },
        ]
      },
      {
        type: 'reviews',
        title: 'Отзывы',
        data: {
          list: [
            {
              name: 'Дмитрий Ткач1',
              date: '12 августа 2018',
              text: 'Мне нужно было ставить брекет систему, я&nbsp;всячески противилась этому факту&nbsp;На меня не&nbsp;действовали никакие уговоры, ни&nbsp;о&nbsp;полезности, ни&nbsp;о&nbsp;необходимости. Лишь когда рассказали о&nbsp;невидимых брекетах, я&nbsp;согласилась пойти хотя&nbsp;бы на&nbsp;консультацию.',
              specialist: 'Кирова Ирина Михайловна',
              services: 'Профилактика',
            },
            {
              name: 'Дмитрий Ткач2',
              date: '12 августа 2018',
              text: 'Мне нужно было ставить брекет систему, я&nbsp;всячески противилась этому факту&nbsp;На меня не&nbsp;действовали никакие уговоры, ни&nbsp;о&nbsp;полезности, ни&nbsp;о&nbsp;необходимости. Лишь когда рассказали о&nbsp;невидимых брекетах, я&nbsp;согласилась пойти хотя&nbsp;бы на&nbsp;консультацию.',
              specialist: 'Кирова Ирина Михайловна',
              services: 'Профилактика',
            },
            {
              name: 'Дмитрий Ткач3',
              date: '12 августа 2018',
              text: 'Мне нужно было ставить брекет систему, я&nbsp;всячески противилась этому факту&nbsp;На меня не&nbsp;действовали никакие уговоры, ни&nbsp;о&nbsp;полезности, ни&nbsp;о&nbsp;необходимости. Лишь когда рассказали о&nbsp;невидимых брекетах, я&nbsp;согласилась пойти хотя&nbsp;бы на&nbsp;консультацию.',
              specialist: 'Кирова Ирина Михайловна',
              services: 'Профилактика',
            },
            {
              name: 'Дмитрий Ткач4',
              date: '12 августа 2018',
              text: 'Мне нужно было ставить брекет систему, я&nbsp;всячески противилась этому факту&nbsp;На меня не&nbsp;действовали никакие уговоры, ни&nbsp;о&nbsp;полезности, ни&nbsp;о&nbsp;необходимости. Лишь когда рассказали о&nbsp;невидимых брекетах, я&nbsp;согласилась пойти хотя&nbsp;бы на&nbsp;консультацию.',
              specialist: 'Кирова Ирина Михайловна',
              services: 'Профилактика',
            },
          ]
        }
      },
      {
        type: 'pricelist',
        title: 'Стоимость',
        data: [
          {
            key: 'Профессиональная чистка зубов',
            value: 'от 3 500 Р'
          },
          {
            key: 'Чистка Air flow',
            value: 'от 2 500 Р'
          },
          {
            key: 'Профессиональная чистка зубов',
            value: 'от 3 500 Р'
          },
        ]
      },
      {
        type: 'gallery',
        title: 'Галлерея',
        data: {
          list: [
            {
              image: 'about__gallery-item@desktop.jpg',
              label: 'Краткое описание фотографии'
            },
            {
              image: 'about__gallery-item@desktop.jpg',
              label: 'Краткое описание фотографии'
            },
            {
              image: 'about__gallery-item@desktop.jpg',
              label: 'Краткое описание фотографии'
            },
            {
              image: 'about__gallery-item@desktop.jpg',
              label: 'Краткое описание фотографии'
            },
            {
              image: 'about__gallery-item@desktop.jpg',
              label: 'Краткое описание фотографии'
            },
            {
              image: 'about__gallery-item@desktop.jpg',
              label: 'Краткое описание фотографии'
            },
          ]
        }
      },
      {
        type: 'advise',
        title: 'Вас может заинтересовать',
        data: [
          {
            label: 'Лечение кариеса',
            url: ARTICLE
          },
          {
            label: 'Лечение каналов под микроскопом (пульпит, периодонтит)',
            url: ARTICLE
          },
          {
            label: 'Профессиональная чистка зубов',
            url: ARTICLE
          },
        ]
      }
    ],
  }

  const breadcrumbs = [
    {
      label: 'Главная',
      url: HOME_PAGE
    },
    {
      label: 'Терапия',
      url: HOME_PAGE
    },
    {
      label: 'Профессиональная чистка зубов'
    }
  ]

  const bannerComment = (
    <div className={css.bannerWrapper}>
      <IconClock className={css.bannerIcon} />
      <p className={css.bannerComment} dangerouslySetInnerHTML={{ __html: articleData.banner.comment }} />
    </div>
  )

  return (
    <>
      <Banner {...articleData.banner} comment={bannerComment} />
      <Container className={css.container}>
        <Breadcrumbs dataArray={breadcrumbs} />
        <ContentWithSidebar
          className={css.content}
          data={articleData}
        />
      </Container>
    </>
  )
}

export default withModal(Article)
