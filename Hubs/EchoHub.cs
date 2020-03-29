namespace Papers.Hubs
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.SignalR;

    [Route("/echo")]
    public class EchoHub : Hub
    {
        public void Echo(string message)
        {
            Clients.All.SendAsync("Send", message);
        }
    }
}