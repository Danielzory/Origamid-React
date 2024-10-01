import React from 'react'

const Carro = () => {
    const [speed, setSpeed] = React.useState(0)
    const [ronco, setRonco] = React.useState('tu-tu-tu...')


    const acelerar =()=> {
        if(speed < 250) {
            setSpeed(speed + 55)
            setRonco('Vrum-Vruuuuum')
        }else {
            setSpeed(295)
            setRonco('Vrummm-turutururururururu')
        }
    }

    const freiar =()=> {
        if(speed > 199) {
            setSpeed(speed - 199)
            setRonco('Vrum-Vruuuuum')
        
        }else{
            setSpeed(0)
            setRonco('tu-tu-tu...')
        }
    }

  return (
    <>
      <div style={{background: 'gray', border:'2px solid black', borderRadius: '0.5rem', padding: '5px', margin: '10px 0', textAlign: 'center'}}>
        <h3>{speed} Km/h</h3>
        <p>{ronco}</p>
      </div>
      <button style={{background: 'green', marginRight: '5px'}} onClick={acelerar}>Acelerar</button>
      <button style={{background: 'tomato'}} onClick={freiar}>Freiar</button>
    </>
  )
}

export default Carro
