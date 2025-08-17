import React, { useState, useEffect } from 'react';
import './ProdutoForm.css';

const ProdutoForm = ({ produto, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    nome: '',
    preco: '',
    categoria: ''
  });
  const [errors, setErrors] = useState({});

  const isEditing = !!produto;

  useEffect(() => {
    if (produto) {
      setFormData({
        nome: produto.nome,
        preco: produto.preco.toString(),
        categoria: produto.categoria
      });
    }
  }, [produto]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    } else if (formData.nome.length > 100) {
      newErrors.nome = 'Nome deve ter no máximo 100 caracteres';
    }

    if (!formData.preco) {
      newErrors.preco = 'Preço é obrigatório';
    } else {
      const preco = parseFloat(formData.preco);
      if (isNaN(preco) || preco <= 0) {
        newErrors.preco = 'Preço deve ser um número maior que zero';
      }
    }

    if (!formData.categoria.trim()) {
      newErrors.categoria = 'Categoria é obrigatória';
    } else if (formData.categoria.length > 50) {
      newErrors.categoria = 'Categoria deve ter no máximo 50 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const produtoData = {
        nome: formData.nome.trim(),
        preco: parseFloat(formData.preco),
        categoria: formData.categoria.trim()
      };

      if (isEditing) {
        onSubmit(produto.id, produtoData);
      } else {
        onSubmit(produtoData);
      }
    }
  };

  const handleCancel = () => {
    setFormData({ nome: '', preco: '', categoria: '' });
    setErrors({});
    onCancel();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">
            {isEditing ? 'Editar Produto' : 'Novo Produto'}
          </h3>
          <button className="close" onClick={handleCancel}>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome do Produto *</label>
            <input
              type="text"
              id="nome"
              name="nome"
              className={`form-control ${errors.nome ? 'error' : ''}`}
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite o nome do produto"
              maxLength="100"
            />
            {errors.nome && <span className="error-message">{errors.nome}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="preco">Preço *</label>
            <input
              type="number"
              id="preco"
              name="preco"
              className={`form-control ${errors.preco ? 'error' : ''}`}
              value={formData.preco}
              onChange={handleChange}
              placeholder="0.00"
              step="0.01"
              min="0.01"
            />
            {errors.preco && <span className="error-message">{errors.preco}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="categoria">Categoria *</label>
            <input
              type="text"
              id="categoria"
              name="categoria"
              className={`form-control ${errors.categoria ? 'error' : ''}`}
              value={formData.categoria}
              onChange={handleChange}
              placeholder="Digite a categoria"
              maxLength="50"
            />
            {errors.categoria && <span className="error-message">{errors.categoria}</span>}
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-danger" onClick={handleCancel}>
                             Cancelar
            </button>
            <button type="submit" className="btn btn-success">
                             {isEditing ? 'Salvar Alterações' : 'Criar Produto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProdutoForm; 