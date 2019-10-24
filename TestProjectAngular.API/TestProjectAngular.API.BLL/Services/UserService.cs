using AutoMapper;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using TestProjectAngular.API.BLL.Helpers.Interfaces;
using TestProjectAngular.API.BLL.Interfaces;
using TestProjectAngular.API.Common.DBModels;
using TestProjectAngular.API.Common.Settings;
using TestProjectAngular.API.Common.ViewModels;
using TestProjectAngular.API.DAL.Interfaces;

namespace TestProjectAngular.API.BLL.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly IAuthHelper _authHelper;

        public UserService(IUserRepository userRepository, IMapper mapper, IAuthHelper authHelper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _authHelper = authHelper;
        }

        public async Task<UserAuthorizedViewModel> UserAuthorization(TwitterUserViewModel twitterUser)
        {
            var authorizedUser = new UserAuthorizedViewModel();

            UserDBModel user = _userRepository.GetItems().Where(u => u.TwitterId == twitterUser.Uid).FirstOrDefault();

            if (user == null)
            {
                user = _mapper.Map<UserDBModel>(twitterUser);
                await _userRepository.Create(user);
            }

            authorizedUser = _mapper.Map<UserAuthorizedViewModel>(user);
            authorizedUser.AccessToken = _authHelper.GenerateAceessToken();

            return authorizedUser;
        }
    }
}
