using Backend.Models;
using Backend.Service;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GameController : ControllerBase
    {
        private readonly IGenericService<Game> GameService;

        public GameController(IGenericService<Game> gameService)
        {
            GameService = gameService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Game>>> ListAsync()
        {
            return await GameService.ListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Game>> GetAsync(int id)
        {
            Game game = await GameService.GetAsync(id);
            return game is null ? NotFound() : game;
        }

        [HttpPost]
        public async Task<ActionResult<Game>> CreateAsync(Game game)
        {
            Game newGame = await GameService.CreateAsync(game);
            return CreatedAtAction("Create", newGame);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Game>> CreateOrUpdateAsync(int id, Game game)
        {
            if (game?.Id != id)
                return BadRequest();

            await GameService.UpdateAsync(id, game);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Game>> DeleteAsync(int id)
        {
            await GameService.RemoveAsync(id);
            return NoContent();
        }
    }
}
