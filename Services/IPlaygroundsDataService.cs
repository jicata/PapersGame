namespace Papers.Services
{
    using System.Threading.Tasks;

    public interface IPlaygroundsDataService : IService
    {
        Task AddPlayer(string gameId = null);
    }
}