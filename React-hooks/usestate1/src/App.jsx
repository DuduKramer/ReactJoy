import React from "react";

const App = () => {
  const [contar, setContar] = React.useState(1) 
  const [items, setItems] = React.useState(['Item 1']);


  function handleClick(){
    /* setContar((contar) =>  contar + 1); */
    setContar(contar +1);
    setItems((items) =>[...items, 'item ' + (contar + 1)])
  }
  
  return <div>
    {items.map((item) =>(
      <li key={item}> {item}</li>
    ))}
    <button onClick={handleClick}>{contar}</button>
  </div>;
};


export default App;
