import React from 'react'
import { GlobalContext } from './useContext/GlobalContext'

const BttClear = () => {
    const {clear} = React.useContext(GlobalContext);

  return (
    <button onClick={clear}>
      Limpar
    </button>
  )
}

export default BttClear
