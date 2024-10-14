import React from 'react'
import { GlobalContext } from './useContext/GlobalContext'

const Seletor = () => {
    const global = React.useContext(GlobalContext);

  return (
    <div>
      <h3>Olá: {global.nome}</h3>
      Quantidade: {global.add}{' '}
      <button onClick={() => global.addUm()}>+</button>
      <button onClick={() => global.retirarUm()} style={{marginLeft: '5px', background: 'tomato'}}>-</button>
    </div>
  )
}

export default Seletor
