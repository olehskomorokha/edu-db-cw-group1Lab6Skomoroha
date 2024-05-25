# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних

```sql
	--Create Database
		GO
		/****** Object:  Database [SurveyDb]    Script Date: 23.05.2024 17:30:45 ******/
		CREATE DATABASE [SurveyDb]
		 CONTAINMENT = NONE
		 ON  PRIMARY 
		( NAME = N'SurveyDb', FILENAME = N'C:\Users\olegs\SurveyDb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
		 LOG ON 
		( NAME = N'SurveyDb_log', FILENAME = N'C:\Users\olegs\SurveyDb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
		 WITH CATALOG_COLLATION = DATABASE_DEFAULT

		 USE [SurveyDb]


	--Action
			USE [SurveyDb]
		/****** Object:  Table [dbo].[Actions]    Script Date: 23.05.2024 17:33:52 ******/
		SET ANSI_NULLS ON
		SET QUOTED_IDENTIFIER ON
		CREATE TABLE [dbo].[Actions](
			[Id] [int] IDENTITY(1,1) NOT NULL,
			[date] [datetime2](7) NOT NULL,
			[SurveyId] [int] NOT NULL,
			[StateId] [int] NOT NULL,
			[RoleId] [int] NOT NULL,
		 CONSTRAINT [PK_Actions] PRIMARY KEY CLUSTERED 
		(
			[Id] ASC
		)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
		) ON [PRIMARY]
		ALTER TABLE [dbo].[Actions]  WITH CHECK ADD  CONSTRAINT [FK_Actions_Roles_RoleId] FOREIGN KEY([RoleId])
		REFERENCES [dbo].[Roles] ([Id])
		ON DELETE CASCADE
		ALTER TABLE [dbo].[Actions] CHECK CONSTRAINT [FK_Actions_Roles_RoleId]

		ALTER TABLE [dbo].[Actions]  WITH CHECK ADD  CONSTRAINT [FK_Actions_States_StateId] FOREIGN KEY([StateId])
		REFERENCES [dbo].[States] ([Id])
		ON DELETE CASCADE
		ALTER TABLE [dbo].[Actions] CHECK CONSTRAINT [FK_Actions_States_StateId]
		ALTER TABLE [dbo].[Actions]  WITH CHECK ADD  CONSTRAINT [FK_Actions_Surveys_SurveyId] FOREIGN KEY([SurveyId])
		REFERENCES [dbo].[Surveys] ([Id])
		ON DELETE CASCADE
		ALTER TABLE [dbo].[Actions] CHECK CONSTRAINT [FK_Actions_Surveys_SurveyId]
		GO

	--Answers
			USE [SurveyDb]
		/****** Object:  Table [dbo].[Answers]    Script Date: 23.05.2024 17:34:43 ******/
		SET ANSI_NULLS ON
		SET QUOTED_IDENTIFIER ON
		CREATE TABLE [dbo].[Answers](
			[Id] [int] IDENTITY(1,1) NOT NULL,
			[text] [nvarchar](max) NOT NULL,
			[UserId] [int] NOT NULL,
			[QuestionId] [int] NOT NULL,
		 CONSTRAINT [PK_Answers] PRIMARY KEY CLUSTERED 
		(
			[Id] ASC
		)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
		) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
		ALTER TABLE [dbo].[Answers]  WITH CHECK ADD  CONSTRAINT [FK_Answers_Question_QuestionId] FOREIGN KEY([QuestionId])
		REFERENCES [dbo].[Question] ([Id])
		ON DELETE CASCADE
		GO
		ALTER TABLE [dbo].[Answers] CHECK CONSTRAINT [FK_Answers_Question_QuestionId]

		ALTER TABLE [dbo].[Answers]  WITH CHECK ADD  CONSTRAINT [FK_Answers_Users_UserId] FOREIGN KEY([UserId])
		REFERENCES [dbo].[Users] ([Id])
		ON DELETE CASCADE

		ALTER TABLE [dbo].[Answers] CHECK CONSTRAINT [FK_Answers_Users_UserId]

	--Grants
			USE [SurveyDb]
		/****** Object:  Table [dbo].[Grants]    Script Date: 23.05.2024 17:35:27 ******/
		SET ANSI_NULLS ON
		SET QUOTED_IDENTIFIER ON

		CREATE TABLE [dbo].[Grants](
			[Id] [int] IDENTITY(1,1) NOT NULL,
			[appointed] [datetime2](7) NOT NULL,
			[RoleId] [int] NOT NULL,
			[PermissionId] [int] NOT NULL,
		 CONSTRAINT [PK_Grants] PRIMARY KEY CLUSTERED 
		(
			[Id] ASC
		)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
		) ON [PRIMARY]

		ALTER TABLE [dbo].[Grants]  WITH CHECK ADD  CONSTRAINT [FK_Grants_Permissions_PermissionId] FOREIGN KEY([PermissionId])
		REFERENCES [dbo].[Permissions] ([Id])
		ON DELETE CASCADE

		ALTER TABLE [dbo].[Grants] CHECK CONSTRAINT [FK_Grants_Permissions_PermissionId]

		ALTER TABLE [dbo].[Grants]  WITH CHECK ADD  CONSTRAINT [FK_Grants_Roles_RoleId] FOREIGN KEY([RoleId])
		REFERENCES [dbo].[Roles] ([Id])
		ON DELETE CASCADE

		ALTER TABLE [dbo].[Grants] CHECK CONSTRAINT [FK_Grants_Roles_RoleId]
	

	--Permissions
			USE [SurveyDb]
		/****** Object:  Table [dbo].[Permissions]    Script Date: 23.05.2024 17:39:54 ******/
		SET ANSI_NULLS ON

		SET QUOTED_IDENTIFIER ON

		CREATE TABLE [dbo].[Permissions](
			[Id] [int] IDENTITY(1,1) NOT NULL,
			[name] [nvarchar](max) NOT NULL,
		 CONSTRAINT [PK_Permissions] PRIMARY KEY CLUSTERED 
		(
			[Id] ASC
		)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
		) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

	--Questions
			USE [SurveyDb]

		/****** Object:  Table [dbo].[Question]    Script Date: 23.05.2024 17:41:18 ******/
		SET ANSI_NULLS ON

		SET QUOTED_IDENTIFIER ON

		CREATE TABLE [dbo].[Question](
			[Id] [int] IDENTITY(1,1) NOT NULL,
			[text] [nvarchar](max) NOT NULL,
			[type] [nvarchar](max) NOT NULL,
			[SurveyId] [int] NULL,
		 CONSTRAINT [PK_Question] PRIMARY KEY CLUSTERED 
		(
			[Id] ASC
		)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
		) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

		ALTER TABLE [dbo].[Question]  WITH CHECK ADD  CONSTRAINT [FK_Question_Surveys_SurveyId] FOREIGN KEY([SurveyId])
		REFERENCES [dbo].[Surveys] ([Id])
		ALTER TABLE [dbo].[Question] CHECK CONSTRAINT [FK_Question_Surveys_SurveyId]
	--Roles
			USE [SurveyDb]
		/****** Object:  Table [dbo].[Roles]    Script Date: 23.05.2024 17:41:43 ******/
		SET ANSI_NULLS ON
		SET QUOTED_IDENTIFIER ON
		CREATE TABLE [dbo].[Roles](
			[Id] [int] IDENTITY(1,1) NOT NULL,
			[Name] [nvarchar](max) NOT NULL,
		 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
		(
			[Id] ASC
		)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
		) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
		GO


	--States
			USE [SurveyDb]
		/****** Object:  Table [dbo].[States]    Script Date: 23.05.2024 17:42:11 ******/
		SET ANSI_NULLS ON
		SET QUOTED_IDENTIFIER ON
		CREATE TABLE [dbo].[States](
			[Id] [int] IDENTITY(1,1) NOT NULL,
			[name] [nvarchar](max) NOT NULL,
		 CONSTRAINT [PK_States] PRIMARY KEY CLUSTERED 
		(
			[Id] ASC
		)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
		) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
		GO

	--Surveys
				USE [SurveyDb]
		/****** Object:  Table [dbo].[Surveys]    Script Date: 23.05.2024 17:42:26 ******/
		SET ANSI_NULLS ON

		SET QUOTED_IDENTIFIER ON
		CREATE TABLE [dbo].[Surveys](
			[Id] [int] IDENTITY(1,1) NOT NULL,
			[title] [nvarchar](max) NOT NULL,
			[description] [nvarchar](max) NOT NULL,
			[created] [datetime2](7) NOT NULL,
			[UserId] [int] NOT NULL,
		 CONSTRAINT [PK_Surveys] PRIMARY KEY CLUSTERED 
		(
			[Id] ASC
		)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
		) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
		ALTER TABLE [dbo].[Surveys]  WITH CHECK ADD  CONSTRAINT [FK_Surveys_Users_UserId] FOREIGN KEY([UserId])
		REFERENCES [dbo].[Users] ([Id])
		ON DELETE CASCADE
		ALTER TABLE [dbo].[Surveys] CHECK CONSTRAINT [FK_Surveys_Users_UserId]
		GO
	--Users
			USE [SurveyDb]
		/****** Object:  Table [dbo].[Users]    Script Date: 23.05.2024 17:42:44 ******/
		SET ANSI_NULLS ON
		GO
		SET QUOTED_IDENTIFIER ON
		CREATE TABLE [dbo].[Users](
			[Id] [int] IDENTITY(1,1) NOT NULL,
			[first_name] [nvarchar](max) NOT NULL,
			[last_name] [nvarchar](max) NOT NULL,
			[nick_name] [nvarchar](max) NOT NULL,
			[email] [nvarchar](max) NOT NULL,
			[password] [nvarchar](max) NOT NULL,
			[RoleId] [int] NULL,
		 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
		(
			[Id] ASC
		)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
		) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
		ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Roles_RoleId] FOREIGN KEY([RoleId])
		REFERENCES [dbo].[Roles] ([Id])
		ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Roles_RoleId]
		GO
```
## RESTfull сервіс для управління даними

RESTfull API для управління даними таблиці Survey створеної в MsSql Server 
було створено за допомогою фреймворку entity framework на мові c#. 
RESTfull API представляє собою CRUD застосунок. 

### Файл .gradle з встановленими залежностями

```
	<Project Sdk="Microsoft.NET.Sdk.Web">

	  <PropertyGroup>
		<TargetFramework>net8.0</TargetFramework>
		<Nullable>enable</Nullable>
		<ImplicitUsings>enable</ImplicitUsings>
	  </PropertyGroup>

	  <ItemGroup>
		<PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="8.0.5" />
		<PackageReference Include="Microsoft.EntityFrameworkCore.Tools" Version="8.0.5">
		  <PrivateAssets>all</PrivateAssets>
		  <IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive</IncludeAssets>
		</PackageReference>
		<PackageReference Include="Swashbuckle.AspNetCore" Version="6.4.0" />
	  </ItemGroup>

	</Project>

```
# Реалізація доступу до бази даних

### Підключення бази даних
```
	{
	  "ConnectionStrings": {
		"DeafaultConnection": "server=(localdb)\\MSSQLLocalDB;Database=SurveyDb;Integrated Security=True"
	  },
	  "Logging": {
		"LogLevel": {
		  "Default": "Information",
		  "Microsoft.AspNetCore": "Warning"
		}
	  },
	  "AllowedHosts": "*"
	}
```

### Основний клас для запуску API
```
	using Microsoft.EntityFrameworkCore;
	using SurveyWebApp.Data;

	var builder = WebApplication.CreateBuilder(args);

	// Add services to the container.
	var optionsBuilder = builder.Services.AddDbContext<StoreDbContext>(options =>
		options.UseSqlServer(builder.Configuration.GetConnectionString("DeafaultConnection")));

	builder.Services.AddControllers();
	// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
	builder.Services.AddEndpointsApiExplorer();
	builder.Services.AddSwaggerGen();

	var app = builder.Build();

	// Configure the HTTP request pipeline.
	if (app.Environment.IsDevelopment())
	{
		app.UseSwagger();
		app.UseSwaggerUI();
	}

	app.UseHttpsRedirection();

	app.UseAuthorization();

	app.MapControllers();

	app.Run();
```
### Клас сутності для взаємодії з БД
```
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
```

### Контролер для роботи з опитуваннями

```
  namespace SurveyWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SurveyController : ControllerBase
    {
        private StoreDbContext _context;
        public SurveyController(StoreDbContext context)
        {
            _context = context;
        }

        // GET: api/Surveys
        [HttpGet("GetAllSurveys")]
        public async Task<ActionResult<IEnumerable<SurveyInfo>>> GetSurveys()
        {
            var surveys = await _context.Surveys.ToListAsync();
            var surveyInfos = surveys.Select(SurveyMapper.MapToSurveyInfo).ToList();
            return Ok(surveyInfos);
        }

        // GET: api/Surveys/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SurveyInfo>> GetSurvey(int id)
        {
            var survey = await _context.Surveys.FirstOrDefaultAsync(s => s.Id == id);

            if (survey == null)
            {
                return NotFound();
            }

            return Ok(survey);
        }

        // POST: api/Surveys/AddSurvey
        [HttpPost("AddSurvey")]
        public async Task<IActionResult> AddSurvey(AddSurveyModel surveyInfo, int userId)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == userId);
            if(user == null)
            {
                return BadRequest("non registered person cant create Survey");
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var survey = new Survey{
                title = surveyInfo.title,
                description = surveyInfo.description,
                created = DateTime.Now,
                UserId = userId,
            };

            _context.Surveys.Add(survey);
            await _context.SaveChangesAsync();

            return Ok(surveyInfo);
        }

        // PUT: api/Surveys/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSurvey(int id, UpdateSurvey survey)
        {
            // Знаходимо об'єкт Survey за його Id
            var _survey = await _context.Surveys.FindAsync(id);

            if (_survey == null)
            {
                return BadRequest("Survey not found");
            }

            // Оновлюємо властивості об'єкта Survey згідно з даними з SurveyInfo
            _survey.title = survey.title;
            _survey.description = survey.description;

            try
            {
                // Зберігаємо зміни до бази даних
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SurveyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Surveys/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSurvey(int id)
        {
            var survey = await _context.Surveys.FindAsync(id);
            if (survey == null)
            {
                return NotFound();
            }

            _context.Surveys.Remove(survey);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SurveyExists(int id)
        {
            return _context.Surveys.Any(e => e.Id == id);
        }
    }
}

```

### Сервіс для роботи з моделями
```
	    public class AddSurveyModel
    {
        public string title { get; set; }
        public string description { get; set; }
        public DateTime created { get; set; }
    }
	    public class SurveyInfo
    {
        public int Id { get; set; } 
        public string title { get; set; }
        public string description { get; set; }
        public DateTime created { get; set; }
        public int UserId { get; set; }
    }
	    public class UpdateSurvey
    {
        public string title { get; set; }
        public string description { get; set; }
    }
```

