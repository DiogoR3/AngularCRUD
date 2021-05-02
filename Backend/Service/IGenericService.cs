using System.Collections.Generic;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.Service
{
    public interface IGenericService<T> where T : class, IModel
    {
        public Task<List<T>> ListAsync();
        public Task<T> GetAsync(int id);
        public Task<T> CreateAsync(T entity);
        public Task UpdateAsync(int id, T entity);
        public Task RemoveAsync(int id);
    }
}
