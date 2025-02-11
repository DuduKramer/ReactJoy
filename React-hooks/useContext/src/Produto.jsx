import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);
  console.log(global)
  if (global.dados === null) {
    return <h1>Não há dados disponíveis.</h1>;
  }

  return (
    <div>
      <ul>
        {global.dados.map((produto) => (
          <li key={produto.id}>
            <h3>{produto.nome}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
