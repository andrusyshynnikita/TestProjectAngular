using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace TestProjectAngular.API.Common.ViewModels
{
    public class RefreshRequest
    {
        [JsonProperty("refreshToken")]
        public string RefreshToken { get; set; }
    }
}
