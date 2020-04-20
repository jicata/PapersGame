import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base/base.service';
import { SERVER_ENDPOINTS } from '../../constants/server-endpoints';
import { canvasMap } from '../../graphics/playground-canvas-map';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
    this.apiUrl = this.baseAppUrl + SERVER_ENDPOINTS.PLAYGROUNDS.BASE_API_URL;
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
