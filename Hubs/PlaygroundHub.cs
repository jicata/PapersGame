namespace Papers.Hubs
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.SignalR;

    [Route("/playground")]
    public class PlaygroundHub : Hub
    {
        public void Join(string message)
        {
            Clients.All.SendAsync("Join", message);
        }
    }
}