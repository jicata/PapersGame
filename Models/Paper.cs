namespace Papers.Models
{
    using System.ComponentModel.DataAnnotations;

    public class Paper
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Word { get; set; }
    }
}