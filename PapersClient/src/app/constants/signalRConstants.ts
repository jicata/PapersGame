export const SIGNALR = {
    PLAYGROUND : {
        HUB_ENDPOINT : '/playground',
        METHODS: {
            JOIN_OR_CREATE : 'JoinOrCreate',
            UPDATE_GAME_SESSION: 'UpdateGameSession',
            PLAYER_LIMIT_REACHED: 'PlayerLimitReached',
            PLAYER_JOINED: 'PlayerJoined',
        }
    },
    SERVER_TIMEOUT_DEFAULT_INTERVAL : 1000 * 100
 }