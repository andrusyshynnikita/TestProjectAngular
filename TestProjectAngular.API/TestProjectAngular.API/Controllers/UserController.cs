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
using TestProjectAngular.API.Common.Settings;
using TestProjectAngular.API.Common.ViewModels;

namespace TestProjectAngular.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpPost]
        public IActionResult AuthorizationUserFromTwitter([FromBody]TwitterUserViewModel twitterUser)
        {
            if (twitterUser == null)
            {
                return BadRequest("Invalid client request");
            }

       
            if (!string.IsNullOrEmpty(twitterUser.Uid))
            {
               
                var tokenHandler = new JwtSecurityTokenHandler();
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                    new Claim(ClaimTypes.Email, "test@test.com")
                    }),
                    Expires = DateTime.UtcNow.AddMinutes(AuthSettings.LIFETIME),
                    SigningCredentials = new SigningCredentials(AuthSettings.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                var returnToken = tokenHandler.WriteToken(token);

                //var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new { Token = returnToken });
            }
            else
            {
                return Unauthorized();
            }
        }
    }
}