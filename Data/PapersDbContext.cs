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

        public DbSet<Paper> Type { get; set; }
    }
}