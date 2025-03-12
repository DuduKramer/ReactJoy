import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Produtos.module.css'

const Produtos = () => {
  const[produtos, setProdutos] = React.useState([]);

  useEffect(() => {
    const fetchProdutos = async() => {
      try{
        const response = await fetch('https://ranekapi.origamid.dev/json/api/produto')
        const data = await response.json()
        setProdutos(data)
      }catch(error){
        console.error('Erro ao buscar produtos', error);
      }
    }
    fetchProdutos();
  },[]);  
  return (
    <div className={styles.produtos}>
      <ul>
        {produtos.map((produto) =>(
          <li key={produto.id}>
            <Link to ={`/produtos/${produto.id}`}><img src = {produto.fotos[0].src}></img>{produto.nome}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Produtos
