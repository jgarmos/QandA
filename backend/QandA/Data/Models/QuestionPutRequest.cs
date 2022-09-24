using System.ComponentModel.DataAnnotations;

namespace QandA.Data
{
    public class QuestionPutRequest
    {
        [StringLength(100)]
        public string Title { get; set; }
        [Required]
        public string Content { get; set; }
    }
}