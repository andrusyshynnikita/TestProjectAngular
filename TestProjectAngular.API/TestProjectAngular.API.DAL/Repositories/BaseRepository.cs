using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using TestProjectAngular.API.DAL.Interfaces;

namespace TestProjectAngular.API.DAL.Repositories
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : class
    {
        private readonly TestProjectAngularAPICoreContext _context;


        protected DbSet<TEntity> DbSet { get; private set; }
        public BaseRepository(TestProjectAngularAPICoreContext webAPICoreContext)
        {
            _context = webAPICoreContext;
            DbSet = _context.Set<TEntity>();

        }
        public Task<TEntity> FindItem(int id)
        {
            return DbSet.FindAsync(id);
        }

        public IQueryable<TEntity> GetItems()
        {
            return DbSet;
        }

        public async Task<TEntity> Create(TEntity entity)
        {
            var result = DbSet.Add(entity);
            await SaveChanges();

            return result.Entity;
        }

        public async Task Update(TEntity entity)
        {
            DbSet.Update(entity).State = EntityState.Modified;
            await SaveChanges();
        }

        public async Task Delete(int id)
        {
            var item = await FindItem(id);
            DbSet.Remove(item);
            await SaveChanges();
        }

        public async Task SaveChanges()
        {
            await _context.SaveChangesAsync();
        }
    }
}
