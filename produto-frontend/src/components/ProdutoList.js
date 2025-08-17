import React from 'react';
import './ProdutoList.css';

const ProdutoList = ({ produtos, onEdit, onDelete }) => {
  const formatarPreco = (preco) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  };

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR');
  };

  if (produtos.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
        <p>Nenhum produto cadastrado.</p>
        <p>Clique em "Novo Produto" para começar!</p>
      </div>
    );
  }

  return (
    <div className="produto-list">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data de Criação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>
                <strong>{produto.nome}</strong>
              </td>
              <td>
                <span className="preco">{formatarPreco(produto.preco)}</span>
              </td>
              <td>
                <span className="categoria">{produto.categoria}</span>
              </td>
              <td>{formatarData(produto.dataCriacao)}</td>
              <td>
                <div className="acoes">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => onEdit(produto)}
                    title="Editar produto"
                  >
                                         Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(produto.id)}
                    title="Excluir produto"
                  >
                                         Excluir
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProdutoList; 