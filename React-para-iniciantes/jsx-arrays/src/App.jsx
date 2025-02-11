import React from "react";


// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];
  
  const App = () => {
    function limpaPreco(){
        produtos.map((produto) =>{
            produto.preco = parseFloat(produto.preco.replace(/[^0-9,-]+/g, '').replace(',', '.'))
        })
    }
    limpaPreco()
    return <section>
     {produtos.filter((produto) => produto.preco >1500)
     .map(({id, nome, preco, cores}) => (
        <div key={id}>
            <h1>{nome}</h1>
            <p>Preço: R$ {preco}</p>
            <ul>
               {cores.map((cor, indexCor) =>{
                return <li key={indexCor} style={{background: cor, color: 'white'}}>{cor}</li>
               })}
            </ul> 
        </div>
     ))}

    </section>;
  };
  

export default App
