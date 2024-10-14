import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
    const [add, setAdd] = React.useState(0);
    const nome = 'Stranger'

    function addUm () {
        setAdd(add => add + 1)
    }

    function retirarUm () {
        setAdd(add => add - 1)
    }


    return (
        <GlobalContext.Provider value={{addUm, retirarUm, add, nome}}>
            {children}
        </GlobalContext.Provider>
    )    
}