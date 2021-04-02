using Microsoft.EntityFrameworkCore;
using TestePraticoWevo.Models;

namespace TestePraticoWevo.Repository
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
