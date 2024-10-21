import React from 'react'
import useLocalStorage from './useLocalStorage'
import useFetch from './useFetch'

const Aula6 = () => {
    const [produto, setProduto] = useLocalStorage('produto', '')
    const {request, data, loading, error} = useFetch(); 

    React.useEffect(() => {
      async function fetchData() {
        const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/'); //caso um dia eu queira usar response e json para passar alguma info para o usuário
      }
      fetchData();
    }, [request])

    function handleClick ({target}) {
        setProduto(target.innerText);
    }

    if (error) return <h2>{error}</h2>
    if(loading) return <h3>Carregando...</h3>
    if (data)
      return (
        <div>   
            <p>Produto Selecionado: {produto}</p>
            <button onClick={handleClick}>PlayStation 5</button>
            <button onClick={handleClick} style={{marginLeft: '10px'}}>Xbox Series X</button>
            <hr />

            {data.map((produto)=>(
              <div key={produto.id}>
                <h2>{produto.nome}</h2>
              </div>
            ))}

        </div>     
      )
      else return null     
}

export default Aula6
