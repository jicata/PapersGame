namespace Papers.Controllers
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class PapersController : ControllerBase
    {
        // GET: api/BlogPosts
        [HttpGet]
        public async Task<IActionResult> GetPapers()
        {
            var values = new Dictionary<string, string>()
            {
                { "one", "1" },
                { "two", "2" }
            };
            return this.Ok(values);
        }
    }
}