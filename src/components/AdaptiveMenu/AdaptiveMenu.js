import React, { Component } from 'react'
import css from './AdaptiveMenu.module.scss'
import classnames from 'classnames'
import IconClose from 'containers/Header/_assets/IconClose'
import IconClock from 'containers/Header/_assets/IconClock'
import Button from 'components/Button/Button'
import IconEye from 'containers/Header/_assets/IconEye'
import { Link } from 'react-router-dom'
import { Collapse } from 'react-collapse/lib/Collapse'
import IconArrow from 'containers/Header/_assets/IconArrow'

// TODO click on grey background closes menu

class AdaptiveMenu extends Component {
  state = {
    isCollapseOpen: false
  }

  handleCollapseClick = () => {
    this.setState(prevState => ({
      ...prevState,
      isCollapseOpen: !prevState.isCollapseOpen
    }))
  }

  render () {
    const { data, isOpened, handleClose } = this.props

    const phones = data.phones.map((phone, index) => (
      <li className={css.phoneItem} key={index}>
        <a className={css.phoneLink} href={`tel: ${phone.split(' ').join('')}`}>
          { phone }
        </a>
      </li>
    ))

    const mainList = data.list.map((item, index) => {
      if (item.sublist && item.sublist.length > 0) {
        return (
          <li className={css.item} key={index}>
            <button
              type='button'
              className={classnames(css.collapseBtn, css.link, {
                [css.collapseBtnOpened]: this.state.isCollapseOpen
              })}
              onClick={this.handleCollapseClick}
            >
              { item.text }
              <IconArrow className={classnames(css.iconArrow, { [css.iconArrowOpened]: this.state.isCollapseOpen })} />
            </button>
            <Collapse isOpened={this.state.isCollapseOpen}>
              <ul className={css.sublist}>
                {
                  item.sublist.map((subitem, index) => (
                    <li className={css.subitem} key={index}>
                      <Link to={subitem.url} className={css.sublink}>
                        { subitem.text }
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </Collapse>
          </li>
        )
      }

      return (
        <li className={css.item} key={index}>
          <Link to={item.url} className={css.link}>
            { item.text }
          </Link>
        </li>
      )
    })

    const timeline = '&copy;2008-' + new Date().getFullYear()

    return (
      <div className={classnames(css.wrapper, {[css.wrapperVisible]: isOpened})}>
        <div className={classnames(css.content, {[css.contentVisible]: isOpened})}>
          <button
            className={css.close}
            type='button'
            onClick={handleClose}
          >
            Закрыть адаптивное меню
            <IconClose className={css.iconClose} />
          </button>
          <div className={css.top}>
            <div className={css.info}>
              <p className={css.schedule}>
                <IconClock className={css.iconClock} />
                <span className={css.scheduleLabel} dangerouslySetInnerHTML={{__html: data.schedule}} />
              </p>
              <ul className={css.phoneList}>
                { phones }
              </ul>
            </div>
            <Button
              className={css.btn}
              label='Записаться'
              // TODO create button click handler and modal functionality
              handleClick={() => {}}
            />
            <button
              className={css.switchColorsBtn}
              // TODO create button click handler and switch color functionality
              onClick={() => {}}
              type='button'
            >
              <IconEye className={css.iconEye} />
              Для слабовидящих
            </button>
          </div>
          <nav>
            <ul className={css.list}>
              { mainList }
            </ul>
          </nav>
          <div className={css.bottom}>
            <ul className={css.auxList}>
              {data.auxList.map((item, index) => (
                <li className={css.auxItem} key={index}>
                  <Link className={css.auxLink} to={item.url}>
                    { item.text }
                  </Link>
                </li>
              ))}
            </ul>
            <span className={css.timeline} dangerouslySetInnerHTML={{ __html: timeline }} />
          </div>
        </div>
      </div>
    )
  }
}

export default AdaptiveMenu
