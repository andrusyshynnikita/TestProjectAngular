using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace TestProjectAngular.API.Common.ViewModels
{
    public class RefreshResponce : BaseViewModel
    {
        [JsonProperty("accessToken")]
        public string AccessToken { get; set; }

        [JsonProperty("refreshToken")]
        public string RefreshToken { get; set; }
    }
}
