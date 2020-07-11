import React from 'react'
import css from './Select.module.scss'
import SelectItem from 'react-select'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

const Select = ({
  className,
  onChange,
  value,
  options,
  defaultValue,
  isDisabled,
  placeholder = 'Выбрать'
}) => {
  // You need react-select@3.0.4 to make it "see" simplebar. Does not work on newer versions of
  // react-select
  const renderScrollbar = props => {
    return (
      <SimpleBar style={{ maxHeight: '24rem' }} autoHide={false}>{props.children}</SimpleBar>
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
      padding: '0 2.5rem',
      height: '6rem'
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
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        isDisabled={isDisabled}
        autoFocusFirstOption={false}
      />
    </div>
  )
}

export default Select
