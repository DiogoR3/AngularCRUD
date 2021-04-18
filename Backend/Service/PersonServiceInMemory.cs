using System.Collections.Generic;
using System.Linq;
using Backend.Models;
using Backend.Repository;

namespace Backend.Service
{
    public class PersonServiceInMemory : IPersonService
    {
        private readonly PersonContext Context;

        public PersonServiceInMemory(PersonContext context)
        {
            Context = context;
        }

        List<Person> IPersonService.List()
        {
            return Context.Person.ToList();
        }

        public Person Get(int id)
        {
            return Context.Person.Where(p => p.Id == id).FirstOrDefault();
        }

        public Person Create(Person pessoa)
        {
            pessoa.Id = 0;
            Context.Person.Add(pessoa);
            Context.SaveChanges();
            return pessoa;
        }

        public void Update(int id, Person pessoa)
        {
            Person pessoaAtual = Context.Person.Where(p => p.Id == pessoa.Id).FirstOrDefault();

            if (pessoaAtual is null)
            {
                pessoa.Id = 0;
                Context.Person.Add(pessoa);
            }
            else
                Context.Entry(Context.Person.FirstOrDefault(p => p.Id == id)).CurrentValues.SetValues(pessoa);

            Context.SaveChanges();
        }

        public void Remove(int id)
        {
            Person pessoa = Context.Person.Where(p => p.Id == id).FirstOrDefault();

            if (pessoa is not null)
            {
                Context.Person.Remove(pessoa);
                Context.SaveChanges();
            }
        }
    }
}
