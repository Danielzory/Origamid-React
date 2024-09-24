
const Botao = ({ativo, setAtivo}) => {
    
    const handleClick = () => {
        setAtivo(!ativo)
    };

  return (
    <>
    <button onClick={handleClick}>{ ativo ? 'Ativo' : 'Inativo' }</button>
    </>
  );
};

export default Botao
