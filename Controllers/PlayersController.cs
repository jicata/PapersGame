namespace Papers.Controllers
{
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Mvc;

    using Papers.DTOs;
    using Papers.Services;

    public class PlayersController : ApiController
    {
        private readonly IPlayersDataService playersData;

        public PlayersController(IPlayersDataService playersData)
        {
            this.playersData = playersData;
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreatePlayerModel model)
        {
            await this.playersData.Create(model);
            return this.Ok();
        }
    }
}