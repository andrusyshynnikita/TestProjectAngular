using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestProjectAngular.API.DAL.Interfaces
{
    public interface IBaseRepository<TEntity> where TEntity : class
    {
        IQueryable<TEntity> GetItems();

        Task<TEntity> FindItem(int id);

        Task<TEntity> Create(TEntity item);

        Task Update(TEntity item);

        Task Delete(int id);

    }
}
