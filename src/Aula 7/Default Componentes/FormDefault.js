import React from 'react'
import InputDefault from './InputDefault'
import SelectDefault from './SelectDefault';
import RadioDefault from './RadioDefault';
import CheckBoxDefault from './CheckBoxDefault';
import useForm from './Hooks/useForm';

const FormDefault = () => {
    const [nome, setNome] = React.useState(''); 
    const [produto, setProduto] = React.useState('')
    const [cor, setCor] = React.useState('')
    const [controle, setControle] = React.useState('')
    const [pag, setPag] = React.useState([])
    const cep = useForm('cep') // apliquei a validação apenas para cep e senha
    const senha = useForm('senha')



    function handleSubmit (e) {
      e.preventDefault();
      if (cep.validade()) {
        console.log('Enviar')
      } else {
        console.log('Não Enviar')
      }

    }  

  return (
    <form onSubmit={handleSubmit}>
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
            placeholder= 'Senha@123'
            {...senha}
        />
        <SelectDefault 
            options={["PS5", "Nintendo Switch", "X Box Series X"]}
            value={produto}
            setValue={setProduto}    
        />
        <h3>Controles</h3>
        <RadioDefault 
          options={['DualSense', '8Bitdo Series S|X', 'Microsoft Series S|X', '8Bitdo Switch', 'Nintendo Switch']}
          value={controle}
          setValue={setControle}
        />
        <h3>Cores</h3>
        <RadioDefault 
          options={['Azul', 'Preto', 'Branco', 'Rosa', 'Vermelho']}
          value={cor}
          setValue={setCor}
        />
        <h3>Forma de pagamento aceitas</h3>
        <CheckBoxDefault 
          options={['Credito', 'Débito', 'PIX', 'Boleto']}
          value={pag}
          setValue={setPag}
        />
        <InputDefault 
          id='cep'
          label='Cep'
          type='text'
          placeholder= '0000-000'
          {...cep} // assim espalho todos os itens necessários no return do useForm
        />

      <button>Enviar</button>
    </form>
  )
}

export default FormDefault
