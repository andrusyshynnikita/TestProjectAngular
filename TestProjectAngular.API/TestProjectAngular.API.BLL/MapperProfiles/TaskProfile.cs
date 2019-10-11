using AutoMapper;
using TestProjectAngular.API.Common.DBModels;
using TestProjectAngular.API.Common.ViewModels;

namespace TestProjectAngular.API.BLL.MapperProfiles
{
    public class TaskProfile : Profile
    {
        public TaskProfile()
        {
            CreateMap<TaskDB, TaskViewModel>().ForMember(m => m.AudioFileContent, vm => vm.Ignore());

            CreateMap<TaskViewModel, TaskDB>();
        }
    }
}
