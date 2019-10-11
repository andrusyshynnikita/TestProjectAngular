using System;
using System.Collections.Generic;
using System.Text;

namespace TestProjectAngular.API.Common.ViewModels
{
    public class ResponseRequestViewModel<T>
    {
        public bool IsSuccess { get; set; }

        public string Message { get; set; }

        public T ResponseData { get; set; }
    }
}
