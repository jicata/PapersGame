namespace Papers.Services.Implementations
{
    using System.Threading.Tasks;

    public class PlaygroundDataService : IPlaygroundDataService
    {
        private static int PlayerLimit;
        private static int PlayerCount;

        public async Task SetPlayerLimit(int limit, string gameId = null)
            => PlayerLimit = limit;

        public async Task<bool> PlayerLimitHasBeenReached(string gameId = null)
            => PlayerCount >= PlayerLimit;

        public async Task AddPlayer(string gameId = null)
            => PlayerCount++;
    }
}