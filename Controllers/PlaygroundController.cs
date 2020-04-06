namespace Papers.Controllers
{
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Papers.Services;

    [ApiController]
    [Route("api/[controller]/[action]")]
    [Produces("application/json")]
    public class PlaygroundController : ControllerBase
    {
        private readonly IPlaygroundDataService PlaygroundData;

        public PlaygroundController(IPlaygroundDataService playgroundData) => PlaygroundData = playgroundData;

        [HttpPost]
        public async Task<IActionResult> SetPlayerLimit([FromBody]int limit)
        {
            await this.PlaygroundData.SetPlayerLimit(limit);
            return this.Ok(limit);
        }
    }
}