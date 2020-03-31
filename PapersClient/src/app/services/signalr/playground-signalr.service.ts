import { Injectable } from "@angular/core";
import { BaseSignalRService } from "./base/base-signalr.service";
import { SIGNALR } from '../../constants/signalRConstants';

@Injectable({
  providedIn: "root"
})
export class PlaygroundSignalRService extends BaseSignalRService {
  constructor() {
    super(SIGNALR.PLAYGROUND.HUB_ENDPOINT);
  }

  joinOrCreatePlayground(gameSessionId) {
    return this.invoke(SIGNALR.PLAYGROUND.METHODS.JOIN_OR_CREATE, gameSessionId);
  }

  subscribeToBroadCastGameSession(action) {
    this.hubConnection.on(SIGNALR.PLAYGROUND.METHODS.UPDATE_GAME_SESSION, (msg) => {
      action(msg);
    });
  }


}
