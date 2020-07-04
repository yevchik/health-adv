import React from 'react'
import Container from 'components/Grid/Container'
import css from './Intro.module.scss'
import classnames from 'classnames'
import IconPhone from 'assets/icons/IconPhone'
import IconClock from 'assets/icons/IconClock'
import IconSearch from 'assets/icons/IconSearch'
import IconEye from 'containers/Header/_assets/IconEye'

const Intro = ({ className, data }) => (
  <div className={classnames(css.wrapper, className)}>
    <Container className={css.container}>
      <div className={css.phones}>
        <IconPhone className={css.iconPhone} />
        <ul className={css.list}>
          {data.phones.map((phone, index) => (
            <li className={css.item} key={index}>
              <a className={css.phone} href={`tel:${phone.split(' ').join('')}`}>
                { phone }
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.schedule}>
        <IconClock className={css.iconClock} />
        <span className={css.label} dangerouslySetInnerHTML={{ __html: data.schedule }} />
      </div>
      <button
        className={css.search}
        type='button'
        onClick={() => {}}
      >
        <IconSearch className={css.iconSearch} />
        <span className={css.label}>
          Поиск
        </span>
      </button>
      <button
        className={css.colorMode}
        type='button'
        onClick={() => {}}
      >
        <IconEye className={css.iconEye} />
        <span className={css.label}>
          Для слабовидящих
        </span>
      </button>
    </Container>
  </div>
)

export default React.memo(Intro)
