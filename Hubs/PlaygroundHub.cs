namespace Papers.Hubs
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.SignalR;

    using Papers.Services;

    [Route("/playground")]
    public class PlaygroundHub : Hub
    {
        private static Dictionary<string, List<string>> gameSessions = new Dictionary<string, List<string>>();
        private readonly IPlaygroundsDataService _playgroundsData;

        public PlaygroundHub(IPlaygroundsDataService playgroundsData) => this._playgroundsData = playgroundsData;

        public async Task JoinOrCreate(string gameSessionId)
        {
            // var gameSessionExists = gameSessions.Keys.Any(k => k == gameSessionId);
            //
            // if (!gameSessionExists)
            // {
            //     this.Co
            //     gameSessions.Add(gameSessionId, new List<string>{ Context.ConnectionId });
            //     await this.playgroundData.AddPlayer();
            // }
            // else
            // {
            //     if (!await playgroundData.PlayerLimitHasBeenReached())
            //     {
            //         await this.playgroundData.AddPlayer();
            //         gameSessions[gameSessionId].Add(Context.ConnectionId);
            //     }
            //     else
            //     {
            //         // temp solution to enforce limitation
            //         await Clients.Client(this.Context.ConnectionId).SendAsync("PlayerLimitReached");
            //     }
            //
            // }
            // this.UpdateGameSession(gameSessionId);
        }

        private void UpdateGameSession(string gameSessionId)
        {
            var clients = gameSessions[gameSessionId];
            Clients.Clients(clients).SendAsync("UpdateGameSession", clients);
        }

        private void PlayerJoined(string connectionId)
        {
            Clients.All.SendAsync("PlayerJoined", connectionId);
        }
    }
}