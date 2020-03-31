import { Component, OnInit } from "@angular/core";
import { HubConnection } from "@microsoft/signalr";
import { PlaygroundSignalRService } from "src/app/services/signalr/playground-signalr.service";

@Component({
  selector: "app-playground",
  templateUrl: "./playground.component.html",
  styleUrls: ["./playground.component.scss"]
})
export class PlaygroundComponent implements OnInit {
  hubConnection: HubConnection;
  players: string[] = [];

  constructor(private playgroundSignalRService: PlaygroundSignalRService) {}

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
