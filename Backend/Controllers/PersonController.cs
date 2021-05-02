using Backend.Models;
using Backend.Service;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonController : ControllerBase
    {
        private readonly IGenericService<Person> PersonService;

        public PersonController(IGenericService<Person> personService)
        {
            PersonService = personService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Person>>> ListAsync()
        {
            return await PersonService.ListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Person>> GetAsync(int id)
        {
            Person person = await PersonService.GetAsync(id);
            return person is null ? NotFound() : person;
        }

        [HttpPost]
        public async Task<ActionResult<Person>> CreateAsync(Person person)
        {
            Person newPerson = await PersonService.CreateAsync(person);
            return CreatedAtAction("Create", newPerson);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Person>> CreateOrUpdateAsync(int id, Person person)
        {
            if (person?.Id != id)
                return BadRequest();

            await PersonService.UpdateAsync(id, person);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Person>> DeleteAsync(int id)
        {
            await PersonService.RemoveAsync(id);
            return NoContent();
        }
    }
}
