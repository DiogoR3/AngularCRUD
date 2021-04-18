using System.Collections.Generic;
using System.Linq;
using Backend.Models;
using Backend.Repository;

namespace Backend.Service
{
    public class PersonService : IPersonService
    {
        private readonly PersonContext Context;

        public PersonService(PersonContext context)
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

        public Person Create(Person person)
        {
            person.Id = 0;
            Context.Person.Add(person);
            Context.SaveChanges();
            return person;
        }

        public void Update(int id, Person person)
        {
            Person pessoaAtual = Context.Person.Where(p => p.Id == person.Id).FirstOrDefault();

            if (pessoaAtual is null)
            {
                person.Id = 0;
                Context.Person.Add(person);
            }
            else
                Context.Entry(Context.Person.FirstOrDefault(p => p.Id == id)).CurrentValues.SetValues(person);

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
