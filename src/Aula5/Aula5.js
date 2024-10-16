import React from 'react'
import Seletor from './Seletor'
import { GlobalStorage } from './useContext/GlobalContext'
import BttClear from './BttClear'

const Aula5 = () => {
  return (
    <div>
        <GlobalStorage>
          <Seletor />
          <BttClear />
          <hr />
        </GlobalStorage>
    </div>
  )
}

export default Aula5
