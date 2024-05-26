using System.Runtime.Serialization;

namespace SurveyWebApp
{
    [Serializable]
    internal class AlreadyRegisteredException : Exception
    {
        public AlreadyRegisteredException()
        {
        }

        public AlreadyRegisteredException(string? message) : base(message)
        {
        }

        public AlreadyRegisteredException(string? message, Exception? innerException) : base(message, innerException)
        {
            message = message ?? string.Empty;
        }

        protected AlreadyRegisteredException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}