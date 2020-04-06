import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base/base.service';
import { retry, catchError } from 'rxjs/operators';
import { SERVER_ENDPOINTS } from '../../constants/server-endpoints';
import { canvasMap } from '../../graphics/playground-canvas-map';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
    this.apiUrl = this.baseAppUrl + SERVER_ENDPOINTS.PLAYGROUND.BASE_API_URL;
  }

  setPlayerLimit(limit: number){
    return this.httpClient.post<number>(
      this.apiUrl + SERVER_ENDPOINTS.PLAYGROUND.SET_PLAYER_LIMIT,
      JSON.stringify(limit),
      this.httpOptions
    ).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }


  getPlayerStyle(playerCount) {
    const style = canvasMap[playerCount];
    if (!style.taken) {
      canvasMap[playerCount] = style;
      return style;
    }
    else {
      this.getPlayerStyle(playerCount++);
    }
  }
}
