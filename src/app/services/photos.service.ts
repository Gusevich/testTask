import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Photo} from "../model/models";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private REST_API_SERVER = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }
  getPhotos() {
    return this.http
      .get<Photo[]>(this.REST_API_SERVER + '/photos')
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
