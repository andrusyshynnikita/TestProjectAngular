using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TestProjectAngular.API.Common.DBModels
{
    public class BaseDBModel
    {
        public BaseDBModel()
        {
            Date = DateTime.UtcNow;
        }
        [Key]
        public int Id { get; set; }
        public DateTime Date { get; set; }
    }
}
