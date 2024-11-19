import React from 'react'

const MultCheck = () => {
    const [cores, setCores] = React.useState([]);

    function handleChange({target}){
        if (target.checked){
            setCores([...cores, target.value])
        }else{
           setCores(cores.filter((cor)=> cor !== target.value)) 
        }    
    }

    const coresArray = ['azul', 'amarelo', 'vermelho', 'laranja', 'preto', 'roxo'];

  return (
    <form>
        {coresArray.map((cor, index) =>    
                <label key={index} style={{textTransform: 'capitalize'}}>
                    <input 
                        type='checkbox'
                        value={cor}
                        onChange={handleChange}
                        checked={cores.includes({cor})}
                    />
                    {cor}
                </label>
        )}
    </form>
  )
}

export default MultCheck
