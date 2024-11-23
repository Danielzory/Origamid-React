import React from 'react'
import InputDefault from './InputDefault'
import SelectDefault from './SelectDefault';

const FormDefault = () => {
    const [nome, setNome] = React.useState('');
    const [senha, setSenha] = React.useState('');    
    const [produto, setProduto] = React.useState('')

  return (
    <form>
        <InputDefault 
            id='name'
            label='Nome'
            type='text'
            value={nome}
            setValue={setNome}
        />
        <InputDefault 
            id='senha'
            label='Senha'
            type='password'
            value={senha}
            setValue={setSenha}
        />
        <SelectDefault 
            options={["PS5", "Nintendo Switch", "X Box Series X"]}
            value={produto}
            setValue={setProduto}    
        />
      <button>Enviar</button>
    </form>
  )
}

export default FormDefault
