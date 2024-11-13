import React from 'react'

const Select = () => {
    const [select, setSelect] = React.useState('') //possível passar valor padrão
    const options = ['','notebook', 'smartphone', 'tablet']

  return (
    <select value={select} onChange={({target}) => setSelect(target.value) }>
      {options.map(option => <option value={option}>{option}</option>)}
    </select>
  )
}

export default Select
