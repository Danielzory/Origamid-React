import React from 'react'

const Chat = () => {
    const [comentarios, setComentarios] = React.useState([]);
    const [input, setInput] = React.useState('')
    const inputElement = React.useRef();


    function handleClick () {
        setComentarios([...comentarios, input]);
        setInput('');
        inputElement.current.focus();
    }

  return (
    <div>
      <section>
        {comentarios.map((comentario => (
            <p key={comentario}>{comentario} </p>
        )))}
      </section>

      <input
        type='text'
        value={input}
        ref={inputElement}
        onChange={({target}) => setInput(target.value)}
    />
    <br />
    <button onClick={handleClick}>Enviar</button>    
    </div>
  )
}

export default Chat
