import React from 'react'
import RadioDefault from './RadioDefault'

const Desafio = () => {
    const [questao, setQuestao] = React.useState(0)
    const [resposta, setResposta] = React.useState('')

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
    ]

  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <RadioDefault pergunta={perguntas[questao].pergunta} options={perguntas[questao].options} value={resposta} setValue={setResposta}/>
        <button onClick={()=>{setQuestao(questao + 1)}}>Avançar</button>
    </form>
  )
}

export default Desafio
