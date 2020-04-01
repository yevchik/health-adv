import React, { Component } from 'react'
import classnames from 'classnames'
import css from './ServicesDesktop.module.scss'
import Container from 'components/Grid/Container'
import Heading from 'components/Heading/Heading'
import Slider from 'components/SliderCards/SliderCards'
import AdvCard from 'components/AdvCard/AdvCard'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  fontSize: state.elastic.curFontSize,
  type: state.elastic.deviceType
})

class ServicesDesktop extends Component {
  constructor (props) {
    super(props)
    this.activeTabRef = null
  }

  state = {
    activeTab: 0,
    tabContentHeight: null
  }

  componentDidMount () {
      this.setState(prevState => ({
      ...prevState,
      tabContentHeight: this.activeTabRef.getBoundingClientRect().height
    }))
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.activeTab !== this.state.activeTab || prevProps.fontSize !== this.props.fontSize) {
      // setTimeout for correct ref height calculation
      setTimeout(() => {
        if (this.props.type === 'desktop') {
          this.setState(prevState => ({
            ...prevState,
            tabContentHeight: this.activeTabRef.getBoundingClientRect().height
          }))
        }
      }, 0)
    }
  }

  handleClickTab = index => {
    this.setState(prevState => ({
      ...prevState,
      activeTab: index
    }))
  }

  setActiveTabRef = el => {
    this.activeTabRef = el
  }

  render () {
    const { className, title, list, ads } = this.props

    const tabs = list.map((item, index) => (
      <button
        className={classnames(css.tab, {
          [css.tabActive]: this.state.activeTab === index
        })}
        key={index}
        onClick={() => this.handleClickTab(index)}
      >
        { item.category }
      </button>
    ))

    const tabBlocks = list.map((item, index) => (
      <div
        className={classnames(css.tabBlock, { [css.tabBlockActive]: this.state.activeTab === index })}
        key={index}
        ref={this.state.activeTab === index && this.setActiveTabRef}
        >
        <ul className={css.sublist}>
          {item.sublist.map((subitem, subindex) => (
            <li className={css.subitem} key={subindex}>
              { subitem.text }
            </li>
          ))}
        </ul>
      </div>
    ))

    return (
      <section className={className}>
        <Container className={css.container}>
          <Heading content={title} />
          <div className={css.tabs}>
            { tabs }
          </div>
          <div className={css.wrapper}>
            <div className={css.tabContent} style={{ height: this.state.tabContentHeight + 'px' }}>
              { tabBlocks }
            </div>
            <div className={css.promo}>
              <Slider>
                {ads.map((item, index) => (
                  <div className={css.slide} key={index}>
                    <AdvCard {...item} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </Container>
      </section>
    )
  }
}

export default connect(mapStateToProps)(ServicesDesktop)
