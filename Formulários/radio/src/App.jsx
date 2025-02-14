import React from 'react'

const App = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');


  function handleChange({target}){
    setProduto(target.value);
  }

  return (
    <form>
      <h2>Cores</h2>
      <label>
        <input 
        type="radio" 
        onChange={({target}) => setCor(target.value)}
        checked = {cor === 'azul'}
        value="azul"/>
       Azul
      </label>
      <label>
        <input 
        type="radio" 
        onChange={({target}) => setCor(target.value)}
        checked = {cor ==='vermelho'}
        value="Vermelho"/>
        Vermelho
      </label>
      <h2>Produtos</h2>
      <label>
        <input 
        type="radio" 
        onChange={handleChange}
        name="produto" 
        value="smartphone"/>
        Smartphone
      </label>
      
      <label>
        <input 
        type="radio" 
        onChange={handleChange}
        name='produto' 
        value="notebook"/>
        Notebook
      </label>
      
    </form>
  )
}

export default App
