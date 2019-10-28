using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TestProjectAngular.API.BLL.Helpers.Interfaces;
using TestProjectAngular.API.Common.Settings;

namespace TestProjectAngular.API.BLL.Helpers
{
    public class AuthHelper : IAuthHelper
    {
        public string GenerateAceessToken()
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Email, "test@test.com")
                }),
                Expires = DateTime.UtcNow.AddMinutes(AuthSettings.LIFETIME),
                SigningCredentials = new SigningCredentials(AuthSettings.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256Signature),
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var returnToken = tokenHandler.WriteToken(token);

            return returnToken;
        }
    }
}
