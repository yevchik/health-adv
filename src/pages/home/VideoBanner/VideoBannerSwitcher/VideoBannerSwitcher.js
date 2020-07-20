import React from 'react'
import css from './VideoBannerSwitcher.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setVideoBannerType } from 'store/actions'

const VideoBannerSwitcher = () => {
  const selectedType = useSelector(state => state.videoBanner.videoBannerType)
  const dispatch = useDispatch()

  const list = (new Array(4).fill('').map((_, index) => (
    <fieldset key={`Vido banner option #${index}`}>
      <input
        type='radio'
        id={`banner-type-${index + 1}`}
        name='banner-type-selector'
        value={index + 1}
        checked={selectedType === index + 1}
        onChange={() => dispatch(setVideoBannerType(index + 1))}
      />
      <label htmlFor={`banner-type-${index + 1}`}>Видео баннер - тип {index + 1}</label>
    </fieldset>
  )))

  return (
    <div className={css.wrapper}>
      <form action="#">
        { list }
      </form>
    </div>
  )
}

export default VideoBannerSwitcher
