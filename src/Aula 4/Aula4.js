import React from 'react'
import Botao from './Botão.js/Botao'
import Modal from './Modal/Modal'
import { useState } from 'react'

const Aula4 = () => {
    const [ativo, setAtivo] = useState(false);

  return (
    <>
        <h2>Hooks</h2>
        <Modal ativo={ativo} setAtivo={setAtivo} />
        <Botao ativo={ativo} setAtivo={setAtivo} />
    </>
  )
}

export default Aula4
