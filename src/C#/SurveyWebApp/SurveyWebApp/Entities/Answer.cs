namespace SurveyWebApp.Entities
{
    public class Answer
    {
        public int Id { get; set; }
        public string text { get; set; }
        public int UserId { get; set; }
        public int QuestionId { get; set; }
        public virtual User User { get; set; }
        public virtual Question Question { get; set; }
    }
}
