
using AutoMapper;
using System.Collections.Generic;
using System.Threading.Tasks;
using TestProjectAngular.API.BLL.Helpers.Interfaces;
using TestProjectAngular.API.BLL.Interfaces;
using TestProjectAngular.API.Common.DBModels;
using TestProjectAngular.API.Common.ViewModels;
using TestProjectAngular.API.DAL.Interfaces;

namespace TestProjectAngular.API.BLL.Services
{
    public class TaskService : ITaskService
    {
        private readonly ITaskRepository _taskRepository;
        private readonly IMapper _mapper;
        private readonly IStorageHelper _storageHelper;

        public TaskService(ITaskRepository taskRepository, IMapper mapper, IStorageHelper storageHelper)
        {
            _taskRepository = taskRepository;
            _mapper = mapper;
            _storageHelper = storageHelper;
        }

        public async Task<IEnumerable<TaskViewModel>> GetTasks(string id)
        {
            IEnumerable<TaskViewModel> tasksviewModel = default;

            IEnumerable<TaskDB> tasksModel = _taskRepository.GetAllUserTasks(id);
            try
            {
                tasksviewModel = _mapper.Map<IEnumerable<TaskDB>, IEnumerable<TaskViewModel>>(tasksModel);
            }
            catch (System.Exception ex)
            {
                System.Console.WriteLine(ex.Message);

                return default;
            }

            return tasksviewModel;
        }

        public async Task<TaskViewModel> CreateOrUpdateTask(TaskViewModel taskViewModel)
        {

            TaskDB task = _mapper.Map<TaskViewModel, TaskDB>(taskViewModel);

            if (task.Id == default(int))
            {
                var savedTask = await _taskRepository.Create(task);
                taskViewModel.Id = savedTask.Id;
            }
            else
            {
                await _taskRepository.Update(task);
            }

            if (!string.IsNullOrEmpty(taskViewModel.AudioFileName) && taskViewModel.AudioFileContent != null)
            {
                await _storageHelper.WriteByteToFileAsync(taskViewModel.AudioFileName, taskViewModel.AudioFileContent);
            }

            return taskViewModel;
        }

        public async Task<ResponseViewModel> Delete(int id)
        {
            var responseViewModel = new ResponseViewModel();

            TaskDB task = await _taskRepository.GetItem(id);

            await _taskRepository.Delete(id);

            responseViewModel.IsSuccess = true;

            if (!string.IsNullOrEmpty(task?.AudioFileName))
            {
                responseViewModel.IsSuccess = await _storageHelper.DeleteFile(task.AudioFileName);
            }

            return responseViewModel;
        }

        public async Task<TaskViewModel> DownloadAudioFile(int id)
        {
            TaskDB taskModel = await _taskRepository.GetItem(id);

            var taskViewModel = _mapper.Map<TaskDB, TaskViewModel>(taskModel);

            if (!string.IsNullOrEmpty(taskModel.AudioFileName))
            {
                taskViewModel.AudioFileContent = await _storageHelper.ReadFileAsync(taskViewModel.AudioFileName);
            }

            return taskViewModel;
        }

    }
}
