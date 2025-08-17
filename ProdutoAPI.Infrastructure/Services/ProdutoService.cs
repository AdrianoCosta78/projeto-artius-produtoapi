using ProdutoAPI.Core.DTOs;
using ProdutoAPI.Core.Entities;
using ProdutoAPI.Core.Interfaces;

namespace ProdutoAPI.Infrastructure.Services
{
    public class ProdutoService : IProdutoService
    {
        private readonly IProdutoRepository _produtoRepository;

        public ProdutoService(IProdutoRepository produtoRepository)
        {
            _produtoRepository = produtoRepository;
        }

        public async Task<IEnumerable<ProdutoResponseDTO>> ObterTodosAsync()
        {
            var produtos = await _produtoRepository.ObterTodosAsync();
            return produtos.Select(MapToResponseDTO);
        }

        public async Task<ProdutoResponseDTO?> ObterPorIdAsync(int id)
        {
            var produto = await _produtoRepository.ObterPorIdAsync(id);
            return produto != null ? MapToResponseDTO(produto) : null;
        }

        public async Task<ProdutoResponseDTO> CriarAsync(ProdutoDTO produtoDTO)
        {
            var produto = new Produto
            {
                Nome = produtoDTO.Nome,
                Preco = produtoDTO.Preco,
                Categoria = produtoDTO.Categoria,
                DataCriacao = DateTime.UtcNow
            };

            var produtoCriado = await _produtoRepository.AdicionarAsync(produto);
            return MapToResponseDTO(produtoCriado);
        }

        public async Task<ProdutoResponseDTO?> AtualizarAsync(int id, ProdutoDTO produtoDTO)
        {
            var produto = await _produtoRepository.ObterPorIdAsync(id);
            if (produto == null)
                return null;

            produto.Nome = produtoDTO.Nome;
            produto.Preco = produtoDTO.Preco;
            produto.Categoria = produtoDTO.Categoria;

            var produtoAtualizado = await _produtoRepository.AtualizarAsync(produto);
            return MapToResponseDTO(produtoAtualizado);
        }

        public async Task<bool> ExcluirAsync(int id)
        {
            return await _produtoRepository.ExcluirAsync(id);
        }

        private static ProdutoResponseDTO MapToResponseDTO(Produto produto)
        {
            return new ProdutoResponseDTO
            {
                Id = produto.Id,
                Nome = produto.Nome,
                Preco = produto.Preco,
                Categoria = produto.Categoria,
                DataCriacao = produto.DataCriacao
            };
        }
    }
}
