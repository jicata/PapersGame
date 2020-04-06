import { Component, OnInit } from "@angular/core";
import { HubConnection } from "@microsoft/signalr";
import { PlaygroundCommunicationService } from "src/app/services/signalr/playground-communication.service";
import { PlayerComponent } from '../player/player.component';
import { PlaygroundService } from 'src/app/services/playground/playground.service';

@Component({
  selector: "app-playground",
  templateUrl: "./playground.component.html",
  styleUrls: ["./playground.component.scss"]
})
export class PlaygroundComponent implements OnInit {
  hubConnection: HubConnection;
  group: string[] = [];
  playersWithStyle: { } = { };

  constructor(
    private playgroundCommunicationService: PlaygroundCommunicationService,
    private playgroundService: PlaygroundService,
  ) {}

  ngOnInit(): void {
    this.playgroundCommunicationService.subscribeToBroadCastGameSession(
      this.updateGroup.bind(this)
    );
  }

  getPlayerStyles() {
    return Object.keys(this.playersWithStyle);
  }

  updateGroup = msg => {
    console.log(msg);
    this.group = msg;
    for (let index = 0; index < this.group.length; index++) {
      const player = this.group[index];
      const style = this.playgroundService.getPlayerStyle(index + 1);
      this.playersWithStyle[player] = style;
      console.log(this.playersWithStyle);
    }
  };
}
