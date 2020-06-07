import React from 'react'
import css from './DoctorsFilterMobile.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { updateDoctorsFilter } from 'store/actions'
import SelectMobile from 'components/Select/SelectMobile'

const DoctorsFilterMobile = () => {
  const data = useSelector(state => state.data.doctors.data)
  const filter = useSelector(state => state.data.doctors.filterState)
  const dispatch = useDispatch()
  const {regions = [], expertise = [], names = []} = data
  const {regions: selectedRegion = [], expertise: selectedExpertise = [], names: selectedName = []} = filter

  const regionsFilter = regions.length > 0
    ? (
      <SelectMobile
        className={css.select}
        onChange={evt => dispatch(updateDoctorsFilter(evt, 'regions'))}
        value={selectedRegion}
        options={regions}
      />
    )
    : null

  const expertiseFilter = expertise.length > 0
    ? (
      <SelectMobile
        className={css.select}
        onChange={evt => dispatch(updateDoctorsFilter(evt, 'expertise'))}
        value={selectedExpertise}
        options={expertise}
      />
    )
    : null

  const namesFilter = names.length > 0
    ? (
      <SelectMobile
        className={css.select}
        onChange={evt => dispatch(updateDoctorsFilter(evt, 'names'))}
        value={selectedName}
        options={names}
      />
    )
    : null

  return (
    <div className={css.wrapper}>
      {regionsFilter}
      {expertiseFilter}
      {namesFilter}
    </div>
  )
}

export default DoctorsFilterMobile
