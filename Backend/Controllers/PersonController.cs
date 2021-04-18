using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Backend.Models;
using Backend.Service;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonController : ControllerBase
    {
        private readonly IPersonService PersonService;

        public PersonController(IPersonService personService)
        {
            PersonService = personService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Person>> List()
        {
            System.Threading.Thread.Sleep(2_000);
            return PersonService.List();
        }

        [HttpGet("{id}")]
        public ActionResult<Person> Get(int id)
        {
            Person person = PersonService.Get(id);

            if (person is null)
                return NotFound();

            return person;
        }

        [HttpPost]
        public ActionResult<Person> Create(Person person)
        {
            Person newPerson = PersonService.Create(person);
            return CreatedAtAction("Create", newPerson);
        }

        [HttpPut("{id}")]
        public ActionResult<Person> CreateOrUpdate(int id, Person person)
        {
            if (person?.Id != id)
                return BadRequest();

            PersonService.Update(id, person);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult<Person> Delete(int id)
        {
            PersonService.Remove(id);
            return NoContent();
        }
    }
}
