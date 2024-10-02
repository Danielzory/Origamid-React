import React from 'react'

const Produto4 = ({produto}) => {
    const [dados, setDados] = React.useState(null)

    React.useEffect(()=>{
        if (produto !== null)
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto.toLowerCase()}`)
            .then((response) => response.json())
            .then((json) => setDados(json));
    }, [produto])

    if(dados !== null)
  return (
    <div>
        <h3>{dados.nome}</h3>
        <p>R$ {Number(dados.preco).toFixed(2)}</p>
    </div>
  )
}

export default Produto4
