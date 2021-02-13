using Microsoft.EntityFrameworkCore;
using TestePraticoWevo.Models;

namespace TestePraticoWevo.Repository
{
    public class PessoaContext : DbContext
    {
        public PessoaContext(DbContextOptions<PessoaContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Pessoa> Pessoas { get; set; }

    }
}
