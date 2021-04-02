using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using TestePraticoWevo.Repository;
using TestePraticoWevo.Service;

namespace TestePraticoWevo
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "TestePraticoWevo", Version = "v1" });
            });

            // Para fazer injecao de dependencia da classe servico ja com o DbContext
            bool useInMemory = Configuration.GetValue<bool>("UseInMemory");

            services.AddDbContext<PersonContext>(opt =>
            {
                if (useInMemory)
                    opt.UseInMemoryDatabase("MemoryDB", null);
                else
                    opt.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
            });

            _ = useInMemory ? services.AddScoped<IPersonService, PersonServiceInMemory>() : services.AddScoped<IPersonService, PersonService>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "TestePraticoWevo v1"));
            }

            app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
