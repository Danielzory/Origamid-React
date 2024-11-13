import React from 'react'

const TextArea = () => {
    const [message, setMessage] = React.useState('')
  return (
    <textarea
        value={message}
        onChange={({target}) => setMessage(target.value)}
        rows={5}
    />
      
   
  )
}

export default TextArea
