import React from 'react'

const Checkbox = () => {

    const [termos, setTermos] = React.useState('')


  return (
    <form>
        {termos && <p>Aceitou os termos</p> }
        <label>
            <input 
                type='checkbox'
                value='termos'
                checked={termos}
                onChange={({target}) => setTermos(target.checked)}
            />
            Aceito os termos
        </label>
    </form>
  )
}

export default Checkbox
