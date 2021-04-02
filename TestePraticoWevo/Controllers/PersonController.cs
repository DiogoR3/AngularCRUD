using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TestePraticoWevo.Models;
using TestePraticoWevo.Service;

namespace TestePraticoWevo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonController : ControllerBase
    {
        private readonly IPersonService _personService;

        public PersonController(IPersonService personService)
        {
            _personService = personService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Person>> List()
        {
            return _personService.List();
        }

        [HttpGet("{id}")]
        public ActionResult<Person> Obter(int id)
        {
            Person person = _personService.Get(id);

            if (person is null)
                return NotFound();

            return person;
        }

        [HttpPost]
        public ActionResult<Person> Create(Person person)
        {
            Person newPerson = _personService.Create(person);
            return CreatedAtAction("Create", newPerson);
        }

        [HttpPut("{id}")]
        public ActionResult<Person> CreateOrUpdate(int id, Person person)
        {
            if (person?.Id != id)
                return BadRequest();

            _personService.Update(id, person);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult<Person> Delete(int id)
        {
            _personService.Remove(id);
            return NoContent();
        }
    }
}
