using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TestProjectAngular.API.Common.DBModels
{
    public class BaseDBModel
    {
        [Key]
        public int Id { get; set; }
        public DateTime Date { get; set; }
    }
}
