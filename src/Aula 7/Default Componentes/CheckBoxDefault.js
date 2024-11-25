import React from 'react'

const CheckBoxDefault = ({options, value, setValue, ...props}) => {
    function handleChage ({target}) {
        if(target.checked){
            setValue([...value, target.value])    
        }else {
            setValue(value.filter((itemValue) => itemValue !== target.value ))
        }
    }

  return (
    <>
        {options.map((option) => (
            <label key={option}>
                <input 
                    type='checkbox'
                    value={option}
                    checked={value.includes(option)}
                    onChange={handleChage}
                    {...props}
                />
                {option}
            </label>
        ))}
    </>
  )
}

export default CheckBoxDefault
