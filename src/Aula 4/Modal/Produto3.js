import React from 'react'

const Produto3 = ({dados}) => {
  return (
    <div style={{margin: '0 auto', textAlign: 'center', border: '2px solid gray', borderRadius: '0.5rem', background: 'skyBlue'}}>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
      <p>{dados.descricao}</p>
    </div>
  )
}

export default Produto3
