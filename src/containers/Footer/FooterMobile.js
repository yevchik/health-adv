import React from 'react'
import classnames from 'classnames'
import css from './FooterMobile.module.scss'
import IconFacebook from 'assets/icons/IconFacebook'
import IconVK from 'assets/icons/IconVK'
import IconTwitter from 'assets/icons/IconTwitter'
import IconInstagram from 'assets/icons/IconInstagram'
import IconLogoCreator from 'assets/icons/IconLogoCreator'
// import { YMInitializer } from 'react-yandex-metrika'
import ContainerMobile from 'components/Grid/ContainerMobile'

const FooterMobile = ({ className }) => {
  const footerData = {
    nav: [
      {
        label: 'Услуги и цены',
        sublist: [
          [
            {
              label: 'Стоматологическое лечение',
              url: '/'
            },
            {
              label: 'Косметическая стоматология',
              url: '/'
            },
            {
              label: 'Детская стоматология',
              url: '/'
            },
          ]
        ]
      },
      {
        label: 'О клинике',
        sublist: [
          [
            {
              label: 'О нас',
              url: '/'
            },
            {
              label: 'Частые вопросы',
              url: '/'
            },
            {
              label: 'Лицензии и сертификаты',
              url: '/'
            },
          ],
          [
            {
              label: 'Правовые документы',
              url: '/'
            },
            {
              label: 'Вакансии',
              url: '/'
            },
          ],
        ]
      },
      {
        list: [
          {
            label: 'Медиацентр',
            url: '/'
          },
          {
            label: 'Акции',
            url: '/'
          },
          {
            label: 'Врачи',
            url: '/'
          },
          {
            label: 'Контакты',
            url: '/'
          },
          {
            label: 'Отзывы',
            url: '/'
          },
        ]
      }
    ],
    social: [
      {
        type: 'facebook',
        url: '/'
      },
      {
        type: 'vk',
        url: '/'
      },
      {
        type: 'twitter',
        url: '/'
      },
      {
        type: 'instagram',
        url: '/'
      },
    ],
    companyInfo: {
      startYear: '2008',
      schedule: 'Ежедневно&nbsp;10.00&nbsp;&mdash; 21.00',
    },
    siteInfo: {
      links: [
        {
          text: 'Карта сайта',
          url: '/'
        },
        {
          text: 'Политика конфиденциальности',
          url: '/'
        },
      ]
    }
  }

  const social = (
    <ul className={css.socialList}>
      {footerData.social.map((item, index) => {
        let icon

        switch (item.type) {
          case 'facebook':
            icon = <IconFacebook className={css.iconSocial} />
            break
          case 'vk':
            icon = <IconVK className={css.iconSocial} />
            break
          case 'twitter':
            icon = <IconTwitter className={css.iconSocial} />
            break
          case 'instagram':
            icon = <IconInstagram className={css.iconSocial} />
            break
          default:
            return null
        }

        return (
          <li className={css.socialItem} key={index}>
            <a className={css.socialLink} href={item.url}>
              { icon }
              {`Мы в ${item.type}`}
            </a>
          </li>
        )
      })
      }
    </ul>
  )

  // TODO define which metrics do we use and apply it
  return (
    <footer className={classnames(css.footer, className)}>
      <ContainerMobile className={css.wrapper}>
        <div className={css.top}>
          { social }
        </div>
        <div className={css.bottom}>
          <div className={css.copyright}>
            <p className={css.label}>
              Разработано:
            </p>
            <a href='/' className={css.copyrightLink}>
              <IconLogoCreator className={css.logo} />
            </a>
          </div>
          <div className={css.counter}>
            <div className={css.metrics}>
              Some counter
              {/*<YMInitializer accounts={[31337]} options={{webvisor: true}} version='2' />*/}
            </div>
          </div>
          <p
            className={css.timeline}
            dangerouslySetInnerHTML={{ __html: `&copy;${footerData.companyInfo.startYear} - ${new Date().getFullYear()}` }}
          />
        </div>
      </ContainerMobile>
    </footer>
  )
}

export default React.memo(FooterMobile)
