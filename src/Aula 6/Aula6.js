import React from 'react'
import useLocalStorage from './useLocalStorage'

const Aula6 = () => {
    const [produto, setProduto] = useLocalStorage('produto', '')

    function handleClick ({target}) {
        setProduto(target.innerText);
    }

  return (
    <div>   
        <p>Produto Selecionado: {produto}</p>

        <button onClick={handleClick}>PlayStation 5</button>
        <button onClick={handleClick} style={{marginLeft: '10px'}}>Xbox Series X</button>
      
    </div>
  )
}

export default Aula6
