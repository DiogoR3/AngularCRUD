using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Repository
{
    public class PersonContext : DbContext
    {
        public PersonContext(DbContextOptions<PersonContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Person> Person { get; set; }

    }
}
