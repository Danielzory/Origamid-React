import React from 'react'
import { GlobalContext } from './useContext/GlobalContext'

const Seletor = () => {
    const global = React.useContext(GlobalContext);
    if(global.produtos === null) return null
    console.log(global.produtos)

  return (
    <div>
      <h3>Olá: {global.nome}</h3>
      Quantidade: {global.add}{' '}
      <button onClick={() => global.addUm()}>+</button>
      <button onClick={() => global.retirarUm()} style={{marginLeft: '5px', background: 'tomato'}}>-</button>
      <h2>Atividade 5</h2>

      <ul>
        {global.produtos.map(produto => <li key={produto.id}> {produto.nome} </li>)}
      </ul>
    </div>
  )
}

export default Seletor
