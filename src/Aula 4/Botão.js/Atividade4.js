import React from 'react'
import Produto4 from '../Modal/Produto4';

const Atividade4 = () => {
    const [produto, setProduto] = React.useState(null);

    React.useEffect (() => {
        const produtoLocal = window.localStorage.getItem('produto');
        if(produtoLocal !== null) setProduto(produtoLocal)
    }, [])

    React.useEffect(() => {
        if(produto !== null) window.localStorage.setItem('produto', produto)
    }, [produto])

    function handleClick ({target}) {
        setProduto(target.innerText)
    }


  return (
    <div>
        <h2>Atividade 4</h2>
        <h2>Preferêmcia: {produto}</h2>
        
        <button onClick={handleClick} style={{marginRight: '1rem'}} >Notebook</button>
        <button onClick={handleClick} >SmartPhone</button>

        <Produto4  produto={produto}/>
    </div>
  )
}

export default Atividade4
