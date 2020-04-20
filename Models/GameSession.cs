namespace Papers.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class GameSession
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public bool HasStarted { get; set; }

        public ICollection<Player> Players { get; set; }
    }
}