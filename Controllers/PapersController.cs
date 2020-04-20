namespace Papers.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Mvc;

    using Papers.Data;
    using Papers.DTOs;
    using Papers.Models;

    public class PapersController : ApiController
    {
        private readonly PapersDbContext db;

        public PapersController(PapersDbContext db)
        {
            this.db = db;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetPapers()
        {
            var papers = new List<Paper>
            {
                new Paper { Id = 1, Word = "test 1" },
                new Paper { Id = 2, Word = "test 2" }
            };

            return this.Ok(papers);
        }

        [HttpPost]
        public async Task<IActionResult> PostPapers(IEnumerable<PaperCreateRequestModel> papers)
        {
            var paperEntities = papers.Select(p => new Paper { Word = p.Word });

            await this.db.Papers.AddRangeAsync(paperEntities);
            await this.db.SaveChangesAsync();

            return CreatedAtAction(nameof(this.GetPapers), paperEntities);
        }
    }
}