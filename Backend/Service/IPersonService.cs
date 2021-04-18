using System.Collections.Generic;
using Backend.Models;

namespace Backend.Service
{
    public interface IPersonService
    {
        public List<Person> List();
        public Person Get(int id);
        public Person Create(Person pessoa);
        public void Update(int id, Person pessoa);
        public void Remove(int id);
    }
}
