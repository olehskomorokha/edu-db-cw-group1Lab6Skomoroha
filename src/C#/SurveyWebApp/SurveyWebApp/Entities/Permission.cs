namespace SurveyWebApp.Entities
{
    public class Permission
    {
        public int Id { get; set; }
        public string name { get; set; }
        public ICollection<Grant> Grants { get; set; }
    }
}
