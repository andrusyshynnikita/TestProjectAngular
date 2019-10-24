using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace TestProjectAngular.API.Common.DBModels
{
    public class TaskDB : BaseDBModel
    {
        [ForeignKey("UserDBModel")]
        public int User_Id { get; set; }
        public virtual UserDBModel UserDBModel { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }
        public string AudioFileName { get; set; }
    }
}
