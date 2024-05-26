using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SurveyWebApp.Data;
using SurveyWebApp.Entities;
using SurveyWebApp.Mapper;
using SurveyWebApp.Models;

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
                return BadRequest("Survey not found");
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
