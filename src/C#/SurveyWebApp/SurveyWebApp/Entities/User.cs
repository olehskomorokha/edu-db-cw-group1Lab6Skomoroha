using System.ComponentModel.DataAnnotations.Schema;

namespace SurveyWebApp.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string nick_name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        [ForeignKey("Role")]
        public int? RoleId { get; set; }
        public virtual Role Role { get; set; }
        public ICollection<Answer> Answer { get; set; }
        public ICollection<Survey> Survey { get; set; }
    }
}
