using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TestProjectAngular.API.Common.DBModels
{
  public  class UserDBModel : BaseDBModel
    {
        public string TwitterId { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public string PhotoURL { get; set; }

        public string RefreshToken { get; set; }

        public virtual ICollection<TaskDB> Tasks { get; set; }
    }
}
