using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using TestProjectAngular.API.BLL.Interfaces;
using TestProjectAngular.API.Common.Settings;
using TestProjectAngular.API.Common.ViewModels;

namespace TestProjectAngular.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> AuthorizationUserFromTwitter([FromBody]TwitterUserViewModel twitterUser)
        {
            if (twitterUser == null)
            {
                return BadRequest("Invalid client request");
            }


            if (!string.IsNullOrEmpty(twitterUser.Uid))
            {
                UserAuthorizedViewModel user = await _userService.UserAuthorization(twitterUser);

                return Ok(user);
            }
            else
            {
                return Unauthorized();
            }
        }
    }
}