import React from 'react'
import DesafioRadio from './DesafioRadio'

const Desafio = () => {
    //React hooks
    const [respostas, setRespostas] = React.useState({
        p1: '',
        p2: '',
        p3: '',
        p4: ''
    });
    const [slide, setSlide] = React.useState(0);
    const [resultado, setResultado] = React.useState('')
    //Array
    const perguntas = [
        {
            pergunta: 'Qual método é utilizado para criar componentes ?',
            options: [
                'React.makeComponentes()',
                'React.createComponentes()',
                'React.createElement()'
            ],
            resposta: 'React.createElement()',
            id: 'p1'
        },
        {
            pergunta: 'Como importamos uma componente externo ?',
            options: [
                'import component from "./Componente"',
                'require("./Componente")',
                'import "./Componente"'
            ],
            resposta: 'import component from "./Componente"',
            id: 'p2'
        },
        {
            pergunta: 'Qual hook não é nativo ?',
            options: [
                'useEffect()',
                'useFetch()',
                'useMemo()'
            ],
            resposta: 'useFetch()',
            id: 'p3'
        },
        {
            pergunta: 'Qual palavra deve ser usada para criarmos um hook ?',
            options: [
                'set',
                'get',
                'use'
            ],
            resposta: 'use',
            id: 'p4'
        }
    ];
    //Functions
    function handleChange ({target}) {
        setRespostas({...respostas, [target.id]: target.value})
    };

    function resultadoFinal () {
        const corretas = perguntas.filter(
            ({id, resposta}) => respostas[id] === resposta  //Usa id e resposta do array perguntas e verifica de o id do estado respostas é igual a resposta do array
        );
        setResultado(`Você acertou: ${corretas.length} de ${perguntas.length} perguntas `)
    };

    function handleClick (){
        if(slide < perguntas.length - 1){
            setSlide(slide +1);
        } else {
            setSlide(slide +1);
            resultadoFinal();
        }
    };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
        {perguntas.map((pergunta, index) => (
            <DesafioRadio 
                active={slide === index}
                key={pergunta.id}
                value={respostas[pergunta.id]}
                {...pergunta}
                onChange={handleChange}
        
            />
        ))}
        
        {resultado ? <p>{resultado}</p> : <button onClick={handleClick}>Avançar</button>}
    </form>
  )
}

export default Desafio
