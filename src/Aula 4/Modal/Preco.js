import React from 'react'

const Preco = () => {

    const [quantidade, setQuantidade] = React.useState(0);
    const [data, setData] = React.useState(null)

    React.useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
            .then((response) => response.json())
            .then((json => setData(json)));
    }, [])


  return (
    <div>
        {data && (
            <div>
                <h4>{data.nome}</h4>
                <p> R$ {data.preco * quantidade}</p>
            </div>
        )}
        
      <button onClick={()=>setQuantidade(quantidade + 1)}>{quantidade}</button>
    </div>
  )
}

export default Preco
