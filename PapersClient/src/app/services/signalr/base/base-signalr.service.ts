import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { environment } from "src/environments/environment";

export class BaseSignalRService {
  public hubConnection: HubConnection;

  constructor(hubUrl: string) {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(environment.baseAppUrl + hubUrl)
      .build();

    this.hubConnection.serverTimeoutInMilliseconds = 1000 * 100;

    this.start();
  }

  start() {
    this.hubConnection
      .start()
      .then(() => console.log("Connection started"))
      .catch(err => console.log(err));
  }

  invoke(hubEndpoint, data) {
    return this.hubConnection.invoke(hubEndpoint, data);
  }

  stop(){
    this.hubConnection.stop();
  }
}
