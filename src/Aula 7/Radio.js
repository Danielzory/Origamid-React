import React from 'react'

const Radio = () => {
    const [produto, setProduto] = React.useState('')
    const [cor, setCor] = React.useState('')

    function handleChange ({target}) {
        setProduto(target.value)
    }

  return (
    <form>
        <h3>Produtos</h3>
        <p>{produto}</p>
        <p>{cor}</p>
    <label>
        Smartphone
        <input
            type='radio'
            value='smartphone'
            name='produto' //para separar os grupos de radios (para n selecioar mais de um) usa-se name ou a comparação com cheked
            onChange={handleChange}
        />
    </label>

    <label>
        Notebook
        <input
            type='radio'
            value='notebook'
            name='produto' 
            onChange={handleChange}
        />
    </label>
    <h3>Cores</h3>

    <label>
        Black
        <input
            type='radio'
            value='black'
            checked={cor === 'black'}  //para separar os grupos de radios (para n selecioar mais de um) usa-se name ou a comparação com cheked
            onChange={(({target}) => setCor(target.value))}
        />
    </label>

    <label>
        Gray
        <input
            type='radio'
            value='gray'
            checked={cor === 'gray'}
            onChange={(({target}) => setCor(target.value))}
        />
    </label>
</form>
      
  )
}

export default Radio
