using Backend.Models;
using Backend.Repository;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Service
{
    public class GenericService<T> : IGenericService<T> where T : class, IModel
    {
        private readonly CrudContext Context;
        private readonly DbSet<T> currentDbSet;

        public GenericService(CrudContext context)
        {
            Context = context;
            currentDbSet = Context.Set<T>();
        }

        public async Task<List<T>> ListAsync() => await currentDbSet.ToListAsync();

        public async Task<T> GetAsync(int id) => await currentDbSet.Where(entity => entity.Id == id).FirstOrDefaultAsync();

        public async Task<T> CreateAsync(T entity)
        {
            entity.Id = 0;
            await currentDbSet.AddAsync(entity);
            await Context.SaveChangesAsync();
            return entity;
        }

        public async Task UpdateAsync(int id, T entity)
        {
            T newEntity = await currentDbSet.Where(entity => entity.Id == entity.Id).FirstOrDefaultAsync();

            if (newEntity is null)
            {
                entity.Id = 0;
                await currentDbSet.AddAsync(entity);
            }
            else
                Context.Entry(currentDbSet.FirstOrDefault(entity => entity.Id == id)).CurrentValues.SetValues(entity);

            await Context.SaveChangesAsync();
        }

        public async Task RemoveAsync(int id)
        {
            T entity = currentDbSet.Where(entity => entity.Id == id).FirstOrDefault();

            if (entity is not null)
            {
                currentDbSet.Remove(entity);
                await Context.SaveChangesAsync();
            }
        }
    }
}
