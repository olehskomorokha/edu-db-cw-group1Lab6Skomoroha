using SurveyWebApp.Entities;
using SurveyWebApp.Models;

namespace SurveyWebApp.Mapper
{
    public class SurveyMapper
    {
        public static SurveyInfo MapToSurveyInfo(Survey survey)
        {
            return new SurveyInfo
            {
                Id = survey.Id,
                title = survey.title,
                description = survey.description,
                created = survey.created,
                UserId = survey.UserId
            };
        }
        public static AddSurveyModel MapAddSurveyModel(Survey survey)
        {
            return new AddSurveyModel
            {
                title = survey.title,
                description = survey.description,
                created = survey.created
            };
        }
        public static UpdateSurvey MapUpdateSurvey(Survey survey)
        {
            return new UpdateSurvey
            {
                title = survey.title,
                description = survey.description
            };
        }
    }
}
