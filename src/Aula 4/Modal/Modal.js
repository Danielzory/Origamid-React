import React from 'react'

const Modal = ({ativo, setAtivo}) => {

    const dados = {nome: 'Brian', carro: 'Lancer Evo.', velocidade: '315 Km/h'}

    if(ativo)  
        return (
            <div style={{border: '2px solid gray', boxShadow: '0 0 5px black', padding: '5px', margin:'15px auto'}}>
                <h3>{dados.nome}</h3>
                <h3>{dados.carro}</h3>
                <h3>{dados.velocidade}</h3>

                <button onClick={() => setAtivo(false)} style={{borderRadius: '50%', background: 'red'}}>X</button>
            </div>
        );
    return null  
}

export default Modal
