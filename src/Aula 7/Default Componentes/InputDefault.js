import React from 'react'

const InputDefault = ({label, id, setValue, type, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        onChange={({target}) => setValue(target.value)}
        {... props}
      />  
    </>
  )
}

export default InputDefault
