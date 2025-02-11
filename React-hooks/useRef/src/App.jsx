import React, { useRef } from "react";

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const[notificacao, setnNotificacao] = React.useState();
  const timeoutRef = React.useRef();

  function handleClick(){
    setCarrinho(carrinho + 5);
    setnNotificacao('Item adicionado ao carrinho');
    clearTimeout(timeoutRef.current)
    timeoutRef.current =   setTimeout(() => {
      setnNotificacao(null);
      console.log('teste')
    }, 2000)
    console.log(timeoutRef.current)
  
  } 
 
  return <div>
    <p>{notificacao}</p>
    <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
  </div>

};


export default App;
