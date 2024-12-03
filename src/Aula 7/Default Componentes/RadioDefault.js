import React from 'react'

const RadioDefault = ({options, value, setValue, pergunta, ...props}) => {
  return (
    <fieldset>

      <legend>{pergunta}</legend>
        {options.map((option) => (
            <label key={option}>
                <input 
                    type='radio' 
                    value={option} 
                    checked={value === option}
                    onChange={({target}) => setValue(target.value)}
                    {...props}
                />
                {option}
            </label>
        ))}

    </fieldset>
  )
}

export default RadioDefault
