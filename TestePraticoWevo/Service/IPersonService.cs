using System.Collections.Generic;
using TestePraticoWevo.Models;

namespace TestePraticoWevo.Service
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
