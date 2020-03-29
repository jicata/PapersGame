import { Component, OnInit, ChangeDetectorRef, Input } from "@angular/core";
import { HubConnection } from "@microsoft/signalr";
import { PlaygroundService } from "src/app/services/signalr/playground.service";

@Component({
  selector: "app-playground",
  templateUrl: "./playground.component.html",
  styleUrls: ["./playground.component.scss"]
})
export class PlaygroundComponent implements OnInit {
  hubConnection: HubConnection;
  players: string[] = [];

  constructor(private playgroundSignalRService: PlaygroundService) {}

  ngOnInit(): void {
    this.playgroundSignalRService
      .subscribeToBroadCastGameSession(this.addUser.bind(this));
  }

  addUser = (msg) => {
    console.log(msg)
    this.players = msg;
  }

  onLoadNext() {
    console.log(this.players);
  }
}
