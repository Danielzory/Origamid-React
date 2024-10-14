import React from 'react'
import Seletor from './Seletor'
import { GlobalStorage } from './useContext/GlobalContext'

const Aula5 = () => {
  return (
    <div>
        <GlobalStorage>
            <Seletor />
        </GlobalStorage>
    </div>
  )
}

export default Aula5
