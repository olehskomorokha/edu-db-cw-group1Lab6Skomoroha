using System.ComponentModel.DataAnnotations.Schema;

namespace SurveyWebApp.Entities
{
    public class Action
    {
        public int Id { get; set; }
        public DateTime date { get; set; }
        [ForeignKey("Survey")]
        public int SurveyId { get; set; }
        public int StateId { get; set; }
        public int RoleId { get; set; }
        public virtual Role Role { get; set; }  
        public virtual State State {  get; set; }
        public virtual Survey Survey { get; set; }

    }
}
