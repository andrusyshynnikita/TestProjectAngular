﻿using System;
using System.Collections.Generic;
using System.Text;

namespace TestProjectAngular.API.Common.ViewModels
{
    public class ResponseRequestViewModel<T> : BaseViewModel
    {
        public T ResponseData { get; set; }
    }
}
