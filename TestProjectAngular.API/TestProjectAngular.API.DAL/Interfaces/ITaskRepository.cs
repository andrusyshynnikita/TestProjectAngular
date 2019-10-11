using System.Collections.Generic;
using TestProjectAngular.API.Common.DBModels;

namespace TestProjectAngular.API.DAL.Interfaces
{
    public interface ITaskRepository : IBaseRepository<TaskDB>
    {
        IEnumerable<TaskDB> GetAllUserTasks(string userId);
    }
}
