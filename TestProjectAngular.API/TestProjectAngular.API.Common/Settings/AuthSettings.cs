using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Text;

namespace TestProjectAngular.API.Common.Settings
{
    public class AuthSettings
    {
        public const string ISSUER = "MyAuthServer";
        public const string AUDIENCE = "http://localhost:3010/";
        public const string KEY = "MySecretKey12345!";
        public static readonly int LIFETIME = 1;
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
