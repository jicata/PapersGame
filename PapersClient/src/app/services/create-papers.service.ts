import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Paper } from '../models/paperModel';

@Injectable({
  providedIn: 'root'
})
export class CreatePapersService {
  baseAppUrl: string;
  apiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) {
    this.baseAppUrl = environment.baseAppUrl;
    this.apiUrl = '/api/Papers/';
  }

  getPapers() {
    return this.http.get<Paper[]>(this.baseAppUrl + this.apiUrl, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  createPapers(papers) {
    return this.http.post<Paper[]>(
      this.baseAppUrl + this.apiUrl,
      JSON.stringify(papers),
       this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
