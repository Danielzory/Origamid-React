import { useEffect, useState } from "react";
import Aula3 from "./Aula 3/Aula3";
import Aula4 from "./Aula 4/Aula4";
import Aula5 from "./Aula5/Aula5";
import Aula6 from "./Aula 6/Aula6";
import Aula7 from "./Aula 7/Aula7";


const luana = {
   cliente: 'Luana',
   idade: 27,
   compras: [

         {nome: "Notbook", preco: "R$ 2500"},
         {nome: "Geladeira", preco: "R$ 3000"},
         {nome: "Smartphone", preco: "R$ 1500"}
   ],

   ativa: true,
  };

  const mario = {
   cliente: 'Mario',
   idade: 31,
   compras: [

         {nome: "Notbook", preco: "R$ 2500"},
         {nome: "Geladeira", preco: "R$ 3000"},
         {nome: "Smartphone", preco: "R$ 1500"},
         {nome: "Guitarra", preco: "R$ 3500"}
   ],

   ativa: false,
  };


const App = () => {

 const [nome, setNome] = useState('');
 const [saldo, setSaldo] = useState(0);

 const attSaldo = () =>{
    const novoSaldo = (Math.random() * 10000).toFixed(2);
    setSaldo(novoSaldo)
 };

 useEffect(()=> {
    attSaldo();
 },[]);


 const estiloP = {
    color: 'marfin',
    fontSize: '1.2rem',
    fontFamily: 'cursive',
 }

const cliente = luana
 
const total = cliente.compras
   .map((item) => Number(item.preco.replace("R$ ", "")))
   .reduce((anterior, posterior)=> anterior + posterior)
 

    return (
    <>
        <h1>
        Curso React Origamid
        </h1>
        <a href="https://www.origamid.com" title="Site do Origamid">Acesse Origamid</a>
        <label style={{color: 'tomato', fontWeight: 'bolder'}} htmlFor="nome">Informe seu Nome</label>
        <input 
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)} 
        />
        <h2>Olá! {nome}</h2>
        <p style={estiloP}>Seu Saldo bancário é de <strong>: $ {saldo}</strong></p>
        {saldo < 3000 ? <strong>A grana ta baixa né...</strong> : <strong>Conta recheada</strong>}
        <hr/>
        <h2>Atividade 1</h2>

        <div>
            <p> Nome: {cliente.cliente} </p>
            <p> Idade: {cliente.idade} </p>
            <p> Total: R$ {total} </p>
            <p> Situação: {' '}
               {cliente.ativa == true ? 
                  <spam style={{color: 'lightgreen'}}> Ativo</spam>
                  : 
                  <spam style={{color: 'red'}}> Inativo</spam> 
               }
            </p> 
            {total >= 8000 && <p>Você esta gastando demais!</p>}
        </div>
        <hr />
        <Aula3 />
        <hr />
        <Aula4 />
        <hr />
        <Aula5 />       
        <Aula6 />
        <Aula7 />

    </>
    ) 
}

export default App