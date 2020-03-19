import React, { Component } from 'react'
import classnames from 'classnames'
import css from './Footer.module.scss'
import Container from 'components/Grid/Container'
import IconFacebook from 'assets/icons/IconFacebook'
import IconVK from 'assets/icons/IconVK'
import IconTwitter from 'assets/icons/IconTwitter'
import IconInstagram from 'assets/icons/IconInstagram'
import IconLogoCreator from 'assets/icons/IconLogoCreator'

class Footer extends Component {
  constructor (props) {
    super(props)
    this.footerData = {
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
      ]
    }
  }

  render () {
    const { className } = this.props

    const social = (
      <ul className={css.socialList}>
        {this.footerData.social.map((item, index) => {
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
              return
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
        <Container>
          <div className={css.top}>
            { social }
          </div>
          <div className={css.bottom}>
            <div className={css.copyright}>
              <p className={css.label}>
                Разработано:
              </p>
              <IconLogoCreator className={css.logo} />
            </div>
            <div className={css.counter}>
              Space for counter
            </div>
          </div>
        </Container>
      </footer>
    )
  }
}

export default Footer
