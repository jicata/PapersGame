namespace Papers.Services
{
    using System.Threading.Tasks;

    using Papers.DTOs;

    public interface IPlayersDataService : IService
    {
        Task Create(CreatePlayerModel model);
    }
}