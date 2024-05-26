namespace SurveyWebApp.Mapper
{
    public class SurveyInfo
    {
        public int Id { get; set; } 
        public string title { get; set; }
        public string description { get; set; }
        public DateTime created { get; set; }
        public int UserId { get; set; }
    }
}
