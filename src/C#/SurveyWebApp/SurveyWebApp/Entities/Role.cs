namespace SurveyWebApp.Entities
{
    public class Role
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Grant> Grants { get; set; }
        public ICollection<Action> Actions { get; set; }
        public ICollection<User> User { get; set; }
    }
}
