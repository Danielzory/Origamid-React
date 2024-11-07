import React from 'react'

const FormObj = () => {
    //o objetivo é não precisar criar um estado para cada campo do form
    const [form, setForm] = React.useState({
        senha: '',
        email: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(form)
    }

    function handleChange ({target}) {
        const {id, value} = target;
        setForm({...form, [id]: value}) // [id]: é a forma de pegar o id do campo
    }

  return (
    
    <form onSubmit={handleSubmit}>
        <h3>Form com objeto</h3>

        <label htmlFor='senha'>Senha</label>
        <input
            type='password'
            id='senha'
            name ='senha'
            onChange={handleChange}
            value={form.senha}     
        />
        <input
            type='email'
            id='email'
            name ='email'
            onChange={handleChange}
            value={form.email}     
        />

        <button>Enviar</button>
      
    </form>
  )
}

export default FormObj
