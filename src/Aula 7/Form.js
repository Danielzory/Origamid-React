import React from 'react'
import Input from './Input'

const Form = () => {
    const [nome, setNome] = React.useState('')
    const [email, setemail] = React.useState('')

  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <Input 
            label={'Nome'}
            value={nome}
            valueAtt={value => setNome(value)}
        />    
        <Input 
            label={'Email'}
            value={email}
            valueAtt={value => setNome(value)}
        />   

        <button>Enviar</button>
      
    </form>
  )
}

export default Form
