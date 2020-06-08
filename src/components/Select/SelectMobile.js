import React from 'react'
import css from './SelectMobile.module.scss'
import SelectItem from 'react-select'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

const SelectMobile = ({
  className,
  onChange,
  value,
  options,
  defaultValue,
  isDisabled,
  placeholder,
  isValueReuired = true
}) => {
  // You need react-select@3.0.4 to make it "see" simplebar. Does not work on newer versions of
  // react-select
  const renderScrollbar = props => {
    return (
      <SimpleBar style={{ maxHeight: '20rem' }} autoHide={false}>{props.children}</SimpleBar>
    )
  }

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'white',
      borderRadius: '0',
      boxShadow: 'none'
    }),
    menu: (styles, { selectProps }) => ({
      ...styles,
      marginTop: 0,
      marginBottom: 0,
      borderRadius: '0',
      border: `1px solid ${selectProps.menuIsOpen ? '#c1f0d6' : '#e9e9e9' }`,
      borderTop: 'none',
      boxShadow: 'none'
    }),
    dropdownIndicator: (styles, { selectProps }) => {
      return {
        ...styles,
        display: isDisabled ? 'none' : 'block',
        transition: 'all 0.3s',
        transform: `rotate(${selectProps.menuIsOpen ? 180 : 0}deg)`
      }
    },
    option: styles => ({
      ...styles,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '1rem 2rem',
      minHeight: '5rem'
    }),
  };

  return (
    <div className={className}>
      <SelectItem
        options={options}
        defaultValue={defaultValue || undefined}
        isSearchable={false}
        className={css.select}
        classNamePrefix="select"
        components={{ MenuList: renderScrollbar }}
        styles={colourStyles}
        placeholder={placeholder || 'Выбрать'}
        onChange={onChange}
        value={value}
        isDisabled={isDisabled}
        autoFocusFirstOption={false}
        controlShouldRenderValue={isValueReuired}
      />
    </div>
  )
}

export default SelectMobile
