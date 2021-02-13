using System.Collections.Generic;
using TestePraticoWevo.Models;

namespace TestePraticoWevo.Service
{
    public interface IPessoaService
    {
        public List<Pessoa> Listar();
        public Pessoa Obter(int id);
        public Pessoa Criar(Pessoa pessoa);
        public void Atualizar(int id, Pessoa pessoa);
        public void Remover(int id);

    }
}
