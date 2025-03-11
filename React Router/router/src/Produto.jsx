import React from 'react';
import { useParams, Route, Routes, NavLink } from 'react-router-dom';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to={`/produto/${params.id}`}>Descrição</NavLink>
        <NavLink to={`/produto/${params.id}/avaliacao`}>Avaliação</NavLink>
        <NavLink to={`/produto/${params.id}/customizado`}>Customizado</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  );
};

export default Produto;
