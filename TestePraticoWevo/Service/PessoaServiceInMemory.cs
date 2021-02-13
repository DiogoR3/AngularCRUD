using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
            _context.Pessoas.Add(pessoa);
            _context.SaveChanges();
            return pessoa;
        }

        public void Atualizar(int id, Pessoa pessoa)
        {
            Pessoa novaPessoa = _context.Pessoas.Where(p => p == pessoa).FirstOrDefault();

            if (novaPessoa is null)
                _context.Pessoas.Add(pessoa);
            else
                _context.Entry(pessoa).State = EntityState.Modified;

            _context.SaveChanges();
        }

        public void Remover(int id)
        {
            Pessoa pessoa = _context.Pessoas.Where(p => p.Id == id).FirstOrDefault();
            _context.Pessoas.Remove(pessoa);
            _context.SaveChanges();
        }
    }
}
