using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TestePraticoWevo.Models;
using TestePraticoWevo.Service;

namespace TestePraticoWevo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PessoaController : ControllerBase
    {
        private readonly IPessoaService _pessoaService;

        public PessoaController(IPessoaService pessoaService)
        {
            _pessoaService = pessoaService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Pessoa>> Listar()
        {
            return _pessoaService.Listar();
        }

        [HttpGet("{id}")]
        public ActionResult<Pessoa> Obter(int id)
        {
            Pessoa pessoa = _pessoaService.Obter(id);

            if (pessoa is null)
                return NotFound();

            return pessoa;
        }

        [HttpPost]
        public ActionResult<Pessoa> Criar(Pessoa pessoa)
        {
            Pessoa novaPessoa = _pessoaService.Criar(pessoa);
            return CreatedAtAction("Criar", novaPessoa);
        }

        [HttpPut("{id}")]
        public ActionResult<Pessoa> CriarOuAtualizar(int id, Pessoa pessoa)
        {
            if (pessoa?.Id != id)
                return BadRequest();

            _pessoaService.Atualizar(id, pessoa);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult<Pessoa> Deletar(int id)
        {
            _pessoaService.Remover(id);
            return NoContent();
        }
    }
}
