namespace Papers.Services.Implementations
{
    using System.Linq;
    using System.Threading.Tasks;

    using Papers.Data;
    using Papers.DTOs;
    using Papers.Models;

    public class PlayersDataService : IPlayersDataService
    {
        private readonly PapersDbContext db;

        public PlayersDataService(PapersDbContext db)
        {
            this.db = db;
        }

        public async Task Create(CreatePlayerModel model)
        {
            var player = this.db.Players.FirstOrDefault(p => p.ConnectionId == model.ConnectionId);

            if (player != null)
            {
                return;
            }

            var newPlayer = new Player
            {
                Name = model.Name,
                ConnectionId = model.ConnectionId
            };

            this.db.Players.Add(newPlayer);
        }
    }
}