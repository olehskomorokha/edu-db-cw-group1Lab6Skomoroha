using Microsoft.EntityFrameworkCore;
using SurveyWebApp.Entities;
using Action = SurveyWebApp.Entities.Action;

namespace SurveyWebApp.Data
{
    public class StoreDbContext : DbContext
    {
        public StoreDbContext(DbContextOptions<StoreDbContext> options)
             : base(options)
        {

        }
        
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Action> Actions { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<Question> Question { get; set; }
        public DbSet<Grant> Grants { get; set; }
        public DbSet<Permission> Permissions { get; set; }
        public DbSet<State> States { get; set; }
        public DbSet<Survey> Surveys { get; set;}


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Question>()
                .HasOne(q => q.Survey)
                .WithMany(s => s.Question)
                .HasForeignKey(q => q.SurveyId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
