using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Repository
{
    public class CrudContext : DbContext
    {
        public CrudContext(DbContextOptions<CrudContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Person> Person { get; set; }
        public DbSet<Game> Game { get; set; }
    }
}
