using ProdutoAPI.Core.DTOs;
using ProdutoAPI.Core.Entities;

namespace ProdutoAPI.Core.Interfaces
{
    public interface IProdutoService
    {
        Task<IEnumerable<ProdutoResponseDTO>> ObterTodosAsync();
        Task<ProdutoResponseDTO?> ObterPorIdAsync(int id);
        Task<ProdutoResponseDTO> CriarAsync(ProdutoDTO produtoDTO);
        Task<ProdutoResponseDTO?> AtualizarAsync(int id, ProdutoDTO produtoDTO);
        Task<bool> ExcluirAsync(int id);
    }
}
