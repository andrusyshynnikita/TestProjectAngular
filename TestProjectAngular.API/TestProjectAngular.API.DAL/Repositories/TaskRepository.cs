using System.Collections.Generic;
using System.Linq;
using TestProjectAngular.API.Common.DBModels;
using TestProjectAngular.API.DAL.Interfaces;

namespace TestProjectAngular.API.DAL.Repositories
{
    public class TaskRepository : BaseRepository<TaskDB>, ITaskRepository
    {

        public TaskRepository(TestProjectAngularAPICoreContext webAPICoreContext) : base(webAPICoreContext)
        {
        }

        public IEnumerable<TaskDB> GetAllUserTasks(string userId)
        {
            IEnumerable<TaskDB> userTasks = DbSet.Where(x => x.User_Id == userId);

            return userTasks;
        }
    }
}
