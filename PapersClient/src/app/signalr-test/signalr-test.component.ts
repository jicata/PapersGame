import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { environment  } from '../../environments/environment';

@Component({
  selector: 'app-signalr-test',
  templateUrl: './signalr-test.component.html',
  styleUrls: ['./signalr-test.component.scss']
})
export class SignalrTestComponent implements OnInit {
  public message = '';
  public messages: string[] = [];
  public hubConnection: HubConnection;

  constructor() { }

  ngOnInit(): void {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(environment.baseAppUrl + '/echo')
      .build();

    this.hubConnection.on("Send", (msg) => {
      this.messages.push(msg);
    });

    this.hubConnection.start()
      .then(() => console.log("Connection started"))
      .catch(err => console.log(err));
  }


  echo() {
    this.hubConnection.invoke("Echo", this.message);
  }
}
