import React from 'react'
import Produto3 from './Produto3';

const Atv3Modal = () => {

    const [dados, setDados] = React.useState(null);
    const [loading, setLoading] = React.useState(null)

    async function handleClick (event) {
        setLoading(true);
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText.toLowerCase()}`);
        const json = await response.json()
        setDados(json);
        setLoading(false);
    }

  return (
    <>
        <button style={{margin: '0.5rem'}} onClick={handleClick} >Notebook</button>
        <button style={{margin: '0.5rem'}} onClick={handleClick} >Tablet</button>
        <button style={{margin: '0.5rem'}} onClick={handleClick} >Smartphone</button>
        {loading && <h3>Carregando...</h3>}
        {!loading && dados && <Produto3 dados={dados} />}
    </>
   
      
    
  )
}

export default Atv3Modal
