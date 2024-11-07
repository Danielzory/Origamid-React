import React from 'react'

const Input = (props) => {
    function attValue (e) {
        props.valueAtt(e.target.value)
    }

  return (
    <div>
        <label htmlFor={props.label}>{props.label}</label>
        <input 
            id={props.label}
            type='text'
            name={props.label}
            value={props.value}
            onChange={attValue}
        />
       
    </div>
  )
}

export default Input
