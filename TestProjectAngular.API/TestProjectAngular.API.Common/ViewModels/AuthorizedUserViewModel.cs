using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace TestProjectAngular.API.Common.ViewModels
{
    public class UserAuthorizedViewModel
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("email")]
        public string Email { get; set; }

        [JsonProperty("phoneNumber")]
        public string PhoneNumber { get; set; }

        [JsonProperty("photoURL")]
        public string PhotoURL { get; set; }

        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("accessToken")]
        public string AccessToken { get; set; }

        [JsonProperty("refreshToken")]
        public string RefreshToken { get; set; }
    }
}
