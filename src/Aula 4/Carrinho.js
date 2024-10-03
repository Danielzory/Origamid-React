import React from 'react'

const Carrinho = () => {
    const [notificacao, setNotificacao] = React.useState(null); 
    const [carrinho, setCarrinho] = React.useState(1);
    const timeoutRef = React.useRef();

    function handleClick () {
        setCarrinho(carrinho +1);
        setNotificacao(`${carrinho} itens adicionados em seu carrinho`);

        clearTimeout(timeoutRef.current);   
        timeoutRef.current = setTimeout( ()=> {
            setNotificacao(null);
        }, 1500)
    }


  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick} >Adicionar ao carrinho</button>
    </div>
  )
}

export default Carrinho
