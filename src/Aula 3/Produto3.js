import React from 'react'

const Produto3 = ({nome, propriedades}) => {
  return (
    <div style={{border: '1px solid', margin: '1rem', padding: '1rem'}}>
       <h3>{nome}</h3>
       <ul>
        {propriedades ? propriedades.map((propriedade) => (
            <li>{propriedade}</li>
        )) : null}     
        </ul> 
    </div>
  )
}

export default Produto3
