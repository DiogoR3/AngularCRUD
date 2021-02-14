using System.Collections.Generic;
using System.Linq;
using TestePraticoWevo.Models;
using TestePraticoWevo.Repository;

namespace TestePraticoWevo.Service
{
    public class PessoaServiceInMemory : IPessoaService
    {
        private readonly PessoaContext _context;

        public PessoaServiceInMemory(PessoaContext context)
        {
            _context = context;
        }

        List<Pessoa> IPessoaService.Listar()
        {
            return _context.Pessoas.ToList();
        }

        public Pessoa Obter(int id)
        {
            return _context.Pessoas.Where(p => p.Id == id).FirstOrDefault();
        }

        public Pessoa Criar(Pessoa pessoa)
        {
            pessoa.Id = 0;
            _context.Pessoas.Add(pessoa);
            _context.SaveChanges();
            return pessoa;
        }

        public void Atualizar(int id, Pessoa pessoa)
        {
            Pessoa pessoaAtual = _context.Pessoas.Where(p => p.Id == pessoa.Id).FirstOrDefault();

            if (pessoaAtual is null)
            {
                pessoa.Id = 0;
                _context.Pessoas.Add(pessoa);
            }
            else
                _context.Entry(_context.Pessoas.FirstOrDefault(p => p.Id == id)).CurrentValues.SetValues(pessoa);

            _context.SaveChanges();
        }

        public void Remover(int id)
        {
            Pessoa pessoa = _context.Pessoas.Where(p => p.Id == id).FirstOrDefault();

            if (pessoa is not null)
            {
                _context.Pessoas.Remove(pessoa);
                _context.SaveChanges();
            }
        }
    }
}
