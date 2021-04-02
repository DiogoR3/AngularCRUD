using System.Collections.Generic;
using System.Linq;
using TestePraticoWevo.Models;
using TestePraticoWevo.Repository;

namespace TestePraticoWevo.Service
{
    public class PersonServiceInMemory : IPersonService
    {
        private readonly PersonContext _context;

        public PersonServiceInMemory(PersonContext context)
        {
            _context = context;
        }

        List<Person> IPersonService.List()
        {
            return _context.Person.ToList();
        }

        public Person Get(int id)
        {
            return _context.Person.Where(p => p.Id == id).FirstOrDefault();
        }

        public Person Create(Person pessoa)
        {
            pessoa.Id = 0;
            _context.Person.Add(pessoa);
            _context.SaveChanges();
            return pessoa;
        }

        public void Update(int id, Person pessoa)
        {
            Person pessoaAtual = _context.Person.Where(p => p.Id == pessoa.Id).FirstOrDefault();

            if (pessoaAtual is null)
            {
                pessoa.Id = 0;
                _context.Person.Add(pessoa);
            }
            else
                _context.Entry(_context.Person.FirstOrDefault(p => p.Id == id)).CurrentValues.SetValues(pessoa);

            _context.SaveChanges();
        }

        public void Remove(int id)
        {
            Person pessoa = _context.Person.Where(p => p.Id == id).FirstOrDefault();

            if (pessoa is not null)
            {
                _context.Person.Remove(pessoa);
                _context.SaveChanges();
            }
        }
    }
}
