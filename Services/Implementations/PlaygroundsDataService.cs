namespace Papers.Services.Implementations
{
    using System.Threading.Tasks;

    public class PlaygroundsDataService : IPlaygroundsDataService
    {
        private static int PlayerCount;

        public async Task AddPlayer(string gameId = null)
            => PlayerCount++;
    }
}