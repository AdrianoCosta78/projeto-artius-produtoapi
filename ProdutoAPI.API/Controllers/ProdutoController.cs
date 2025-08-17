using Microsoft.AspNetCore.Mvc;
using ProdutoAPI.Core.DTOs;
using ProdutoAPI.Core.Interfaces;

namespace ProdutoAPI.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProdutoController : ControllerBase
    {
        private readonly IProdutoService _produtoService;

        public ProdutoController(IProdutoService produtoService)
        {
            _produtoService = produtoService;
        }

        /// <summary>
        /// Lista todos os produtos
        /// </summary>
        /// <returns>Lista de produtos</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProdutoResponseDTO>>> ObterTodos()
        {
            var produtos = await _produtoService.ObterTodosAsync();
            return Ok(produtos);
        }

        /// <summary>
        /// Obtém um produto por ID
        /// </summary>
        /// <param name="id">ID do produto</param>
        /// <returns>Produto encontrado</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<ProdutoResponseDTO>> ObterPorId(int id)
        {
            var produto = await _produtoService.ObterPorIdAsync(id);
            if (produto == null)
                return NotFound();

            return Ok(produto);
        }

        /// <summary>
        /// Cria um novo produto
        /// </summary>
        /// <param name="produtoDTO">Dados do produto</param>
        /// <returns>Produto criado</returns>
        [HttpPost]
        public async Task<ActionResult<ProdutoResponseDTO>> Criar(ProdutoDTO produtoDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var produto = await _produtoService.CriarAsync(produtoDTO);
            return CreatedAtAction(nameof(ObterPorId), new { id = produto.Id }, produto);
        }

        /// <summary>
        /// Atualiza um produto existente
        /// </summary>
        /// <param name="id">ID do produto</param>
        /// <param name="produtoDTO">Novos dados do produto</param>
        /// <returns>Produto atualizado</returns>
        [HttpPut("{id}")]
        public async Task<ActionResult<ProdutoResponseDTO>> Atualizar(int id, ProdutoDTO produtoDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var produto = await _produtoService.AtualizarAsync(id, produtoDTO);
            if (produto == null)
                return NotFound();

            return Ok(produto);
        }

        /// <summary>
        /// Exclui um produto
        /// </summary>
        /// <param name="id">ID do produto</param>
        /// <returns>Resultado da operação</returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult> Excluir(int id)
        {
            var resultado = await _produtoService.ExcluirAsync(id);
            if (!resultado)
                return NotFound();

            return NoContent();
        }
    }
}
