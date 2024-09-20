import React from 'react'
import Titulo3 from './Titulo3'
import Produto3 from './Produto3'

const Produtos3 = () => {

  const produtos = [
    {nome: 'GTA V', propriedades: ['R$ 75,00', 'X BOX ONE']},
    {nome: 'Mario Kart 8', propriedades: ['R$ 185,00', 'SWITCH']}
  ]
    
  return (
    <div>
      <Titulo3 texto={'Produtos'} />
      {produtos ? produtos.map((produto)=>(
            <Produto3 key={produto} {...produto} />
      )): null}
      

    </div>
  )
}

export default Produtos3
