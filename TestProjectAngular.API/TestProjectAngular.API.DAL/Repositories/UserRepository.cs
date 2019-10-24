using TestProjectAngular.API.Common.DBModels;
using TestProjectAngular.API.DAL.Interfaces;

namespace TestProjectAngular.API.DAL.Repositories
{
    public class UserRepository : BaseRepository<UserDBModel>, IUserRepository
    {
        public UserRepository(TestProjectAngularAPICoreContext webAPICoreContext) : base(webAPICoreContext)
        {
        }
    }
}
