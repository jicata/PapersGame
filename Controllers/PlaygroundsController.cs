namespace Papers.Controllers
{
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Papers.Services;

    public class PlaygroundsController : ApiController
    {
        private readonly IPlaygroundsDataService playgroundsData;

        public PlaygroundsController(IPlaygroundsDataService playgroundsData) => this.playgroundsData = playgroundsData;
    }
}