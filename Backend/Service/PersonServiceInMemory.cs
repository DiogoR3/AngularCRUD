using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        public async Task<Person> CreateAsync(Person person)
        {
            person.Id = 0;
            await Context.Person.AddAsync(person);
            await Context.SaveChangesAsync();
            return person;
        }

        public async Task UpdateAsync(int id, Person person)
        {
            Person pessoaAtual = Context.Person.Where(p => p.Id == person.Id).FirstOrDefault();

            if (pessoaAtual is null)
            {
                person.Id = 0;
                await Context.Person.AddAsync(person);
            }
            else
                Context.Entry(Context.Person.FirstOrDefault(p => p.Id == id)).CurrentValues.SetValues(person);

            await Context.SaveChangesAsync();
        }

        public async Task RemoveAsync(int id)
        {
            Person pessoa = Context.Person.Where(p => p.Id == id).FirstOrDefault();

            if (pessoa is not null)
            {
                Context.Person.Remove(pessoa);
                await Context.SaveChangesAsync();
            }
        }
    }
}
