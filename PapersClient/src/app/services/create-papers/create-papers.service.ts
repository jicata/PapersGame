import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Paper } from '../../models/paperModel';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class CreatePapersService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
    this.apiUrl = '/api/Papers/';
  }

  getPapers() {
    return this.httpClient.get<Paper[]>(this.baseAppUrl + this.apiUrl, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  createPapers(papers) {
    return this.httpClient.post<Paper[]>(
      this.baseAppUrl + this.apiUrl,
      JSON.stringify(papers),
       this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
}
