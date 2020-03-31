namespace Papers.Hubs
{
    using System.Collections.Generic;
    using System.Linq;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.SignalR;
    using Microsoft.EntityFrameworkCore.Internal;

    [Route("/playground")]
    public class PlaygroundHub : Hub
    {
        private static Dictionary<string, List<string>> gameSessions = new Dictionary<string, List<string>>();

        public void JoinOrCreate(string gameSessionId)
        {
            var gameSessionExists = gameSessions.Keys.Any(k => k == gameSessionId);

            if (!gameSessionExists)
            {
                gameSessions.Add(gameSessionId, new List<string>{ Context.ConnectionId });
            }
            else
            {
                gameSessions[gameSessionId].Add(Context.ConnectionId);
            }

            this.UpdateGameSession(gameSessionId);
        }

        private void UpdateGameSession(string gameSessionId)
        {
            var clients = gameSessions[gameSessionId];
            Clients.Clients(clients).SendAsync("UpdateGameSession", clients);
        }
    }
}