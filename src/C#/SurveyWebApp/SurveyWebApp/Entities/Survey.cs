namespace SurveyWebApp.Entities
{
    public class Survey
    {
        public int Id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public DateTime created { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public ICollection<Question> Question { get; set; }
        public ICollection<Action> Actions { get; set; }
    }
}
