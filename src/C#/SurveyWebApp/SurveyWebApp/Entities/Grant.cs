namespace SurveyWebApp.Entities
{
    public class Grant
    {
        public int Id { get; set; }
        public DateTime appointed { get; set; }
        public int RoleId { get; set; }
        public int PermissionId { get; set; }
        public virtual Permission Permission { get; set; }
        public virtual Role Role { get; set; }
    }
}
