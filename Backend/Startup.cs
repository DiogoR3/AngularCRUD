using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Backend.Repository;
using Backend.Service;
using Backend.Models;

namespace Backend
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
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Backend", Version = "v1" });
            });

            // Para fazer injecao de dependencia da classe servico ja com o DbContext
            bool useInMemory = Configuration.GetValue<bool>("UseInMemory");

            services.AddDbContext<CrudContext>(opt =>
            {
                if (useInMemory)
                    opt.UseInMemoryDatabase("MemoryDB", null);
                else
                    opt.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
            });

            // _ = useInMemory ? services.AddScoped<IGenericService<Person>>, GenericService<Person>>() : services.AddScoped<IGenericService, GenericService>();
            _ = useInMemory ? services.AddScoped(typeof(IGenericService<>), typeof(GenericServiceInMemory<>)) : services.AddScoped(typeof(IGenericService<>), typeof(GenericService<>));
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Backend v1"));
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
