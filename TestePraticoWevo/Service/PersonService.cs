using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestePraticoWevo.Models;
using TestePraticoWevo.Repository;

namespace TestePraticoWevo.Service
{
    public class PersonService : IPersonService
    {
        private readonly PersonContext _context;

        public PersonService(PersonContext context)
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

        public Person Create(Person person)
        {
            person.Id = 0;
            _context.Person.Add(person);
            _context.SaveChanges();
            return person;
        }

        public void Update(int id, Person person)
        {
            Person pessoaAtual = _context.Person.Where(p => p.Id == person.Id).FirstOrDefault();

            if (pessoaAtual is null)
            {
                person.Id = 0;
                _context.Person.Add(person);
            }
            else
                _context.Entry(_context.Person.FirstOrDefault(p => p.Id == id)).CurrentValues.SetValues(person);

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
