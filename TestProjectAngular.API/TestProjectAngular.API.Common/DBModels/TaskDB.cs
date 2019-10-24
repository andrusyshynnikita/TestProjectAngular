using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace TestProjectAngular.API.Common.DBModels
{
    public class TaskDB : BaseDBModel
    {
        public int User_Id { get; set; }
        [ForeignKey("User_Id")]
        public virtual UserDBModel UserDBModel { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }
        public string AudioFileName { get; set; }
    }
}
