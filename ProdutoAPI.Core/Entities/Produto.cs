using System.ComponentModel.DataAnnotations;

namespace ProdutoAPI.Core.Entities
{
    public class Produto
    {
        public int Id { get; set; }
        
        [Required]
        [StringLength(100)]
        public string Nome { get; set; } = string.Empty;
        
        [Required]
        [Range(0.01, double.MaxValue, ErrorMessage = "O preço deve ser maior que zero")]
        public decimal Preco { get; set; }
        
        [Required]
        [StringLength(50)]
        public string Categoria { get; set; } = string.Empty;
        
        public DateTime DataCriacao { get; set; } = DateTime.UtcNow;
    }
}
