using ProdutoAPI.Core.Entities;

namespace ProdutoAPI.Core.Interfaces
{
    public interface IProdutoRepository
    {
        Task<IEnumerable<Produto>> ObterTodosAsync();
        Task<Produto?> ObterPorIdAsync(int id);
        Task<Produto> AdicionarAsync(Produto produto);
        Task<Produto> AtualizarAsync(Produto produto);
        Task<bool> ExcluirAsync(int id);
    }
}
