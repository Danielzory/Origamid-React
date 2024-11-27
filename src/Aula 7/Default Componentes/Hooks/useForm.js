import React from 'react'

const types = {
    cep: {
        regex: /^\d{5}-?\d{3}$/,
        message: 'Preencha um CEP válido'
    },

    senha: {
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message: 'Insira uma senha válida'
    }
}

const useForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);

    function validade (value) {
        if(value.length === 0 ){
            setError('Preencha um valor');
            return false;
        } else if (!types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function onChange ({target}) {
        if (error) validade(target.value);
        setValue(target.value);
    }



  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validade(value),
    validade: () => validade(value),

  }

}

export default useForm
