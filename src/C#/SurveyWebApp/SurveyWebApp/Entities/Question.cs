using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace SurveyWebApp.Entities
{
    public class Question
    {
        public int Id { get; set; }
        public string text { get; set; }
        public string type { get; set; }
        [ForeignKey("SurveyId")]

        public int? SurveyId { get; set; }
        public virtual Survey Survey { get; set; }
        public ICollection<Answer> Answers { get; set; }

    }
}
