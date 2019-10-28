using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TestProjectAngular.API.Common.ViewModels;

namespace TestProjectAngular.API.BLL.Interfaces
{
    public interface IUserService
    {
        Task<UserAuthorizedViewModel> AuthorizationUser(TwitterUserViewModel twitterUser);

        Task<RefreshResponce> AuthorizationUserWithRefreshToken(string refreshToken);
    }
}
