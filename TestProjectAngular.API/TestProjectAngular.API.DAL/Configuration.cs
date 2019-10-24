using Microsoft.Extensions.DependencyInjection;
using TestProjectAngular.API.DAL.Interfaces;
using TestProjectAngular.API.DAL.Repositories;

namespace TestProjectAngular.API.DAL
{
    public static class Configuration
    {
        public static void Setup(IServiceCollection services)
        {
            services.AddScoped<ITaskRepository, TaskRepository>();
            services.AddScoped<IUserRepository, UserRepository>();
        }
    }
}
