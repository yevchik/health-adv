import React, { Component } from 'react'
import css from './AccordeonList.module.scss'
import classnames from 'classnames'
import { Collapse } from 'react-collapse/lib/Collapse'
import Button from 'components/Button/Button'
import IconPlus from 'assets/icons/IconPlus'

class AccordeonList extends Component {
  componentWillMount () {
    this.props.list.forEach((item, index) => {
      this.setState({
        [`collapse-${index}`]: false
      })
    })
  }

  handleClickTrigger = index => {
    this.setState(prevState => ({
      ...prevState,
      [`collapse-${index}`]: !prevState[`collapse-${index}`]
    }))
  }

  render () {
    const { className, list } = this.props

    const items = list.map((item, index) => (
      <li className={css.item} key={index}>
        <button
          className={classnames(css.trigger, {
            [css.triggerOpened]: this.state[`collapse-${index}`]
          })}
          onClick={evt => this.handleClickTrigger(index)}
        >
          <span className={css.label}>
            { item.category }
          </span>
          <IconPlus className={css.icon} />
        </button>
        <Collapse isOpened={this.state[`collapse-${index}`]}>
          <ul className={css.sublist}>
            {item.sublist.map((item, index) => (
              <li className={css.subitem} key={index}>
                { item.text }
              </li>
            ))}
          </ul>
          <Button
            btnStyle='decorated'
            onClick={() => {}}
            label='Записаться'
            className={css.btn}
          />
        </Collapse>
      </li>
    ))

    return (
      <ul className={classnames(css.list, className)}>
        { items }
      </ul>
    )
  }
}

export default AccordeonList
