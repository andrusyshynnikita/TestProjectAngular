using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using TestProjectAngular.API.BLL.Helpers;
using TestProjectAngular.API.BLL.Helpers.Interfaces;
using TestProjectAngular.API.BLL.Interfaces;
using TestProjectAngular.API.BLL.MapperProfiles;
using TestProjectAngular.API.BLL.Services;

namespace TestProjectAngular.API.BLL
{
    public static class Configuration
    {

        public static void Setup(IServiceCollection services, IHostingEnvironment hostingEnvironment)
        {
            services.AddAutoMapper(typeof(TaskProfile), typeof(UserProfile));
            services.AddScoped<ITaskService, TaskService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IStorageHelper>(sp => new StorageHelper(hostingEnvironment.ContentRootPath));
            services.AddScoped<IAuthHelper, AuthHelper>();
        }
    }
}
