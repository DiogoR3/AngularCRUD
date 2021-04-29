using System.Collections.Generic;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.Service
{
    public interface IPersonService
    {
        public List<Person> List();
        public Person Get(int id);
        public Task<Person> CreateAsync(Person pessoa);
        public Task UpdateAsync(int id, Person pessoa);
        public Task RemoveAsync(int id);
    }
}
