namespace Papers.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class Player
    {
        [Key]
        public int Id { get; set; }

        public string ConnectionId { get; set; }

        public string Name { get; set; }

        public int Score { get; set; }

        public ICollection<Paper> Papers { get; set; }
    }
}