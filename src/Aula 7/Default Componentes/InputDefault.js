import React from 'react'

const InputDefault = ({label, id, setValue, type, value, onBlur, error, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        onChange={({target}) => setValue(target.value)}
        onBlur={onBlur}
        value={value}
        {... props}
      /> 
      {error && <p>{error}</p>}
    </>
  )
}

export default InputDefault
