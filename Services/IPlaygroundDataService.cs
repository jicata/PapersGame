namespace Papers.Services
{
    using System.Threading.Tasks;

    public interface IPlaygroundDataService : IService
    {
        Task SetPlayerLimit(int limit, string gameId = null);

        Task<bool> PlayerLimitHasBeenReached(string gameId = null);

        Task AddPlayer(string gameId = null);
    }
}