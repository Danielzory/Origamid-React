import React from 'react'
import Botao from './Botão.js/Botao'
import Modal from './Modal/Modal'
import { useState } from 'react'
import BotaoContador from './Botão.js/BotaoContador'
import Atv3Modal from './Modal/Atv3Modal'

const Aula4 = () => {
    const [ativo, setAtivo] = useState(false);

  return (
    <>
        <h2>Hooks - useState</h2>
        <Modal ativo={ativo} setAtivo={setAtivo} />
        <Botao ativo={ativo} setAtivo={setAtivo} />
        <BotaoContador />

        <hr />
        <h2>Atividade 3</h2>

        <Atv3Modal />
    </>
  )
}

export default Aula4
