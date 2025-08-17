using Microsoft.EntityFrameworkCore;
using ProdutoAPI.Core.Entities;

namespace ProdutoAPI.Infrastructure.Data
{
    public class ProdutoDbContext : DbContext
    {
        public ProdutoDbContext(DbContextOptions<ProdutoDbContext> options) : base(options)
        {
        }

        public DbSet<Produto> Produtos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

                    modelBuilder.Entity<Produto>().HasData(
                new Produto { Id = 1, Nome = "Notebook Dell", Preco = 3500.00m, Categoria = "Eletrônicos", DataCriacao = DateTime.UtcNow },
                new Produto { Id = 2, Nome = "Mouse Wireless", Preco = 89.90m, Categoria = "Periféricos", DataCriacao = DateTime.UtcNow },
                new Produto { Id = 3, Nome = "Teclado Mecânico", Preco = 299.90m, Categoria = "Periféricos", DataCriacao = DateTime.UtcNow }
            );
        }
    }
}
