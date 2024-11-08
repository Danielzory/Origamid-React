import React from 'react'

const Ex = () => {
    const [response, setResponse] = React.useState(null);
    const [form, setForm] = React.useState({
        nome: '',
        email: '',
        senha: '',
        cep: '',
        numero: '',
        bairro:'' ,
        cidade: '',
        estado: '',
    })

    function handleSubmit (e) {
        e.preventDefault();

        fetch('https://ranekapi.origamid.dev/json/api/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        }).then((response) => {
            setResponse(response);
        });

    }

    function handleChange ({target}) {
        const {id, value} = target;
        setForm({...form, [id]: value});
    }

    //da para fazer esses inputs por map criando um objeto com a unica parte que muda de cada um
  return (
    <form onSubmit={handleSubmit}>
        <h3>Atividade 7</h3>

        <input 
            type='text'
            id='nome'
            name='nome'
            onChange={handleChange}
            value={form.nome}
            placeholder='Nome'
        />
                <input 
            type='email'
            id='email'
            name='email'
            onChange={handleChange}
            value={form.email}
            placeholder='Email'
        />
                <input 
            type='password'
            id='senha'
            name='senha'
            onChange={handleChange}
            value={form.senha}
            placeholder='Senha'
        />
                <input 
            type='text'
            id='cep'
            name='cep'
            onChange={handleChange}
            value={form.cep}
            placeholder='Cep'
        />
                <input 
            type='text'
            id='rua'
            name='rua'
            onChange={handleChange}
            value={form.rua}
            placeholder='Rua'
        />
                <input 
            type='text'
            id='numero'
            name='numero'
            onChange={handleChange}
            value={form.numero}
            placeholder='Numero'
        />
                <input 
            type='text'
            id='bairro'
            name='bairro'
            onChange={handleChange}
            value={form.bairro}
            placeholder='Bairro'
        />
                <input 
            type='text'
            id='cidade'
            name='cidade'
            onChange={handleChange}
            value={form.cidade}
            placeholder='Cidade'
        />
                        <input 
            type='text'
            id='estado'
            name='estado'
            onChange={handleChange}
            value={form.estado}
            placeholder='Estado'
        />
        {response && response.ok && <p>Cadastrado com Sucesso!</p>}
        <button>Cadastrar</button>
      
    </form>
  )
}

export default Ex
