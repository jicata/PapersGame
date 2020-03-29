import { Injectable } from "@angular/core";
import { BaseSignalRService } from "./base/base-signalr.service";

@Injectable({
  providedIn: "root"
})
export class PlaygroundService extends BaseSignalRService {
  constructor() {
    super("/playground");
  }

  joinOrCreatePlayground(gameSessionId) {
    return this.invoke("JoinOrCreate", gameSessionId);
  }

  subscribeToBroadCastGameSession(action) {
    this.hubConnection.on("GameSessions", (msg) => {
      action(msg);
    });
  }


}
