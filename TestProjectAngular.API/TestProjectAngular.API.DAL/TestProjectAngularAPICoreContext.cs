using Microsoft.EntityFrameworkCore;
using TestProjectAngular.API.Common.DBModels;

namespace TestProjectAngular.API.DAL
{
    public class TestProjectAngularAPICoreContext : DbContext
    {
        public TestProjectAngularAPICoreContext(DbContextOptions<TestProjectAngularAPICoreContext> options)
            : base(options)
        { }

        public DbSet<TaskDB> Tasks { get; set; }
    }
}
