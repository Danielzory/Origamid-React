import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
    const [add, setAdd] = React.useState(0);
    const [produtos, setProdutos] = React.useState(null);

    React.useEffect (() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto')
        .then(response => response.json())
        .then(json => setProdutos(json))
    }, [])

    const nome = 'Stranger'

    function addUm () {
        setAdd(add => add + 1)
    }

    function retirarUm () {
        setAdd(add => add - 1)
    }

    function clear () {
        setProdutos(null)
    }


    return (
        <GlobalContext.Provider value={{addUm, retirarUm, add, nome, produtos, setProdutos, clear}}>
            {children}
        </GlobalContext.Provider>
    )    
}