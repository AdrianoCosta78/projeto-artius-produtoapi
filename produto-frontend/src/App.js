import React, { useState, useEffect } from 'react';
import { produtoService } from './services/api';
import ProdutoList from './components/ProdutoList';
import ProdutoForm from './components/ProdutoForm';
import './App.css';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingProduto, setEditingProduto] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    try {
      setLoading(true);
      const data = await produtoService.obterTodos();
      setProdutos(data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar produtos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProduto = async (produtoData) => {
    try {
      await produtoService.criar(produtoData);
      setSuccessMessage('Produto criado com sucesso!');
      setShowForm(false);
      carregarProdutos();
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      setError('Erro ao criar produto');
      console.error(err);
    }
  };

  const handleUpdateProduto = async (id, produtoData) => {
    try {
      await produtoService.atualizar(id, produtoData);
      setSuccessMessage('Produto atualizado com sucesso!');
      setEditingProduto(null);
      setShowForm(false);
      carregarProdutos();
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      setError('Erro ao atualizar produto');
      console.error(err);
    }
  };

  const handleDeleteProduto = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      try {
        await produtoService.excluir(id);
        setSuccessMessage('Produto excluído com sucesso!');
        carregarProdutos();
        setTimeout(() => setSuccessMessage(''), 3000);
      } catch (err) {
        setError('Erro ao excluir produto');
        console.error(err);
      }
    }
  };

  const handleEditProduto = (produto) => {
    setEditingProduto(produto);
    setShowForm(true);
  };

  const handleCancelEdit = () => {
    setEditingProduto(null);
    setShowForm(false);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="card">
          <h1>Gerenciador de Produtos</h1>
          <p>Gerencie seus produtos de forma simples e eficiente</p>
        </header>

        {successMessage && (
          <div className="alert alert-success">
            {successMessage}
          </div>
        )}

        {error && (
          <div className="alert alert-error">
            {error}
            <button 
              onClick={() => setError(null)}
              style={{ marginLeft: '10px', background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
            >
                               X
            </button>
          </div>
        )}

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2>Lista de Produtos</h2>
            <button 
              className="btn btn-primary"
              onClick={() => setShowForm(true)}
            >
              Novo Produto
            </button>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <p>Carregando produtos...</p>
            </div>
          ) : (
            <ProdutoList
              produtos={produtos}
              onEdit={handleEditProduto}
              onDelete={handleDeleteProduto}
            />
          )}
        </div>

        {showForm && (
          <ProdutoForm
            produto={editingProduto}
            onSubmit={editingProduto ? handleUpdateProduto : handleCreateProduto}
            onCancel={handleCancelEdit}
          />
        )}
      </div>
    </div>
  );
}

export default App; 