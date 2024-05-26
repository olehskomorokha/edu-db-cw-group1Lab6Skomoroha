using Microsoft.AspNetCore.Mvc;
using SurveyWebApp.Data;
using SurveyWebApp.Entities;
using SurveyWebApp.Models;

namespace SurveyWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private StoreDbContext _context;
        public UserController(StoreDbContext context)
        {
            _context = context;
        }
        [HttpPost("Register")]
        public async Task<IActionResult> RegisterForm(UserRegisterModel userR)
        {
            // Validate input data
            if (string.IsNullOrWhiteSpace(userR.first_name) || string.IsNullOrWhiteSpace(userR.last_name) ||
                string.IsNullOrWhiteSpace(userR.email) || string.IsNullOrWhiteSpace(userR.password))
            {
                throw new InvalidDataException("Invalid input data.");
            }

            if (_context.Users.Any(x => x.email == userR.email))
            {
                throw new AlreadyRegisteredException("User with this email already has an account.");
            }

            // Create new user
            var userr = new User
            {
                first_name = userR.first_name,
                last_name = userR.last_name,
                nick_name = userR.nick_name,
                email = userR.email,
                password = userR.password
            };

            _context.Users.Add(userr);
            await _context.SaveChangesAsync();
            return Ok(new { Message = "User added successfilly" });
        }
    }
}
