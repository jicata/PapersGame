namespace Papers.Controllers
{
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Mvc;

    using Papers.DTOs;
    using Papers.Services;

    public class GameSessionController : ApiController
    {
        private IGameSessionDataService gameSessionData;

        public GameSessionController(IGameSessionDataService gameSessionData)
        {
            this.gameSessionData = gameSessionData;
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrJoin(CreateGameSessionModel model)
        {
            await this.gameSessionData.CreateOrJoin(model);
            return this.Ok();
        }
    }
}