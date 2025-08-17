namespace ProdutoAPI.Core.DTOs
{
    public class ProdutoResponseDTO
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public decimal Preco { get; set; }
        public string Categoria { get; set; } = string.Empty;
        public DateTime DataCriacao { get; set; }
    }
}
