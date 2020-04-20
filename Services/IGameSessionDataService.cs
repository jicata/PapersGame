namespace Papers.Services
{
    using System.Threading.Tasks;

    using Papers.DTOs;

    public interface IGameSessionDataService : IService
    {
        Task CreateOrJoin(CreateGameSessionModel model);
    }
}