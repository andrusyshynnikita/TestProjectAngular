using System.Collections.Generic;
using System.Threading.Tasks;
using TestProjectAngular.API.Common.ViewModels;

namespace TestProjectAngular.API.BLL.Interfaces
{
    public interface ITaskService
    {
        Task<IEnumerable<TaskViewModel>> GetTasks(string id);
        Task<ResponseViewModel> CreateOrUpdateTask(TaskViewModel taskViewModel);
        Task<ResponseViewModel> Delete(int id);
        Task<TaskViewModel> DownloadAudioFile(int id);
    }
}
