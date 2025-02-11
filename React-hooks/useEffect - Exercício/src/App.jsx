import React from "react";
import Produto from './Produto';

const App = () => {
  const [produto, setproduto] = React.useState(null);

 React.useEffect(() =>{
    const produtoLocal = window.localStorage.getItem('produto');
    if(produtoLocal){
      setproduto(produtoLocal);
    }
  }, []) 
 
  React.useEffect(() =>{
    if(produto !== null){
      window.localStorage.setItem('produto', produto)
    }
  }, [produto])

  function handleClick({ target }){
    setproduto(target.innerText);
  }

 
  return (

    <div>
      <h1>Preferência: {produto}</h1>
      <button style={{margin: '.5rem'}} onClick={handleClick}>notebook</button>
      <button style={{margin: '.5rem'}} onClick={handleClick}>smartphone</button>
      <Produto produto = {produto} />

    </div>

  );
};


export default App;
