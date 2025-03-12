import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'


const ProdutoDetalhes = () => {
  const { id } = useParams();
  const [produto, setProduto] = React.useState(null); 

  useEffect(() => {
    const fetchProduto = async() => {
      try{
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
        const data = await response.json()
        setProduto(data)
      }catch(error){
        console.error('Erro ao buscar produto', error);
      }
    }
    fetchProduto();
  }
  ,[id]);

  if(!produto) return <div>Carregando...</div>
  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <p>Preço: {produto.preco}</p>
      <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
    </div>
  )
}

export default ProdutoDetalhes
