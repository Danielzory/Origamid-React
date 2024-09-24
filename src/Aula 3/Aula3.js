import React from 'react'
import Header3 from './Header3'
import Produtos3 from './Produtos3'
import Home3 from './Home3'


const Aula3 = () => {
  const {pathname} = window.location;

  let Page;
  {pathname === '/produtos' ? Page = Produtos3 : Page = Home3 }

  return (
    <div>
      <h2>Atividade 2</h2>

      <Header3 />
      <Page />
    </div>
  )
}

export default Aula3
