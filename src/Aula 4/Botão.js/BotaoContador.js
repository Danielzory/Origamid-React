import React from 'react'

const BotaoContador = () => {
    const [contar, setContar] = React.useState(1);
    const [items, setItems] = React.useState(['Item 1']);

    const handleClick = () => { 
        setContar(contar + 1);
        setItems([...items, 'Item ' + (contar + 1)]);
    }
    
  return (
    <>
        {items.map((item)=> (
            <li key={item}>{item}</li>
        ))}

      <button onClick={handleClick}>{contar}</button>
    </>
  )
}

export default BotaoContador
