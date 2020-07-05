import React from 'react'
import css from './ContactsCardMobile.module.scss'
import { images } from 'index'
import Heading from 'components/Heading/Heading'
import classnames from 'classnames'
import IconLocation from 'assets/icons/IconLocation'
import IconClock from 'assets/icons/IconClock'
import IconPhone from 'assets/icons/IconPhone'
import IconMail from 'assets/icons/IconMail'
import SliderCardsMobile from 'components/SliderCards/SliderCardsMobile'

const ContactsCardMobile = ({
  address,
  gallery = [],
  mail,
  name,
  phone,
  schedule,
}) => {
  const slides = gallery.map(({ img, label }, index) => (
    <div key={`Contacts slide #${index}`}>
      <img
        className={css.slide}
        src={images('./' + img)}
        alt={label}
      />
    </div>
  ))

  return (
    <article className={css.wrapper}>
      <div>
        <Heading
          tag='h3'
          content={name}
          type='standard'
        />
        <div className={css.info}>
          <ul className={css.list}>
            {address &&
              <li className={classnames(css.item, css.itemAddress)}>
                <IconLocation className={classnames(css.icon, css.iconLocation)} />
                { address }
              </li>
            }
            {schedule &&
              <li className={classnames(css.item, css.itemSchedule)}>
                <IconClock className={classnames(css.icon, css.iconSchedule)} />
                { schedule }
              </li>
            }
            {phone &&
              <li className={classnames(css.item, css.itemPhone)}>
                <IconPhone className={classnames(css.icon, css.iconPhone)} />
                { phone }
              </li>
            }
            {mail &&
              <li>
                <a className={classnames(css.item, css.itemEmail)} href={`mailto:${mail}`}>
                  <IconMail className={css.icon} />
                  { mail }
                </a>
              </li>
            }
          </ul>
        </div>
      </div>
      <SliderCardsMobile className={css.slider}>
        { slides }
      </SliderCardsMobile>
    </article>
  )
}

export default ContactsCardMobile
