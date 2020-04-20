namespace Papers.Services.Implementations
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Papers.Data;
    using Papers.DTOs;
    using Papers.Models;

    public class GameSessionDataService : IGameSessionDataService
    {
        private readonly PapersDbContext db;

        public GameSessionDataService(PapersDbContext db)
        {
            this.db = db;
        }

        public async Task CreateOrJoin(CreateGameSessionModel model)
        {
            //TODO: validate
            var newPlayer = new Player
            {
                ConnectionId = model.UserConnectionId
            };

            // TODO: ? how to resume game ?
            var gameSession = this.db.GameSessions.FirstOrDefault(gs => gs.Name == model.Name);

            if (gameSession != null)
            {
                gameSession.Players.Add(newPlayer);
            }
            else
            {
                this.db.Players.Add(newPlayer);
                var newGameSession = new GameSession
                {
                    Name = model.Name,
                };
                this.db.GameSessions.Add(newGameSession);
            }
        }
    }
}