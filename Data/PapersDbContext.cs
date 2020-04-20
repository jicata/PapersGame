namespace Papers.Data
{
    using Microsoft.EntityFrameworkCore;

    using Papers.Models;

    public class PapersDbContext : DbContext
    {
        public PapersDbContext(DbContextOptions<PapersDbContext> options)
            : base(options)
        {

        }

        public DbSet<Paper> Papers { get; set; }

        public DbSet<Player> Players { get; set; }

        public DbSet<GameSession> GameSessions { get; set; }
    }
}