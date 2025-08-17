import axios from 'axios';

const API_BASE_URL = 'http://localhost:5221/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const produtoService = {
  obterTodos: async () => {
    try {
      const response = await api.get('/produto');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      throw error;
    }
  },

  obterPorId: async (id) => {
    try {
      const response = await api.get(`/produto/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar produto ${id}:`, error);
      throw error;
    }
  },

  criar: async (produto) => {
    try {
      const response = await api.post('/produto', produto);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      throw error;
    }
  },

  atualizar: async (id, produto) => {
    try {
      const response = await api.put(`/produto/${id}`, produto);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar produto ${id}:`, error);
      throw error;
    }
  },

  excluir: async (id) => {
    try {
      await api.delete(`/produto/${id}`);
      return true;
    } catch (error) {
      console.error(`Erro ao excluir produto ${id}:`, error);
      throw error;
    }
  },
};

export default api; 