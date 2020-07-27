import { Injectable } from '@angular/core';
import { Job } from './Job';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { URL, ENDPOINTS_X, ENDPOINTS_Z } from 'src/app/api.config';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// const apiConfig = require('src/app/api.config');

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private httpClient: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      return throwError('Something wrong with network.... Cannot connect to Database');
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
      return throwError('Error Connecting database... Please Try Again Later');
    }
    // return an observable with a user-facing error message
  }

  getJobs() {
    return this.httpClient.get(URL.url_x + ENDPOINTS_X.getJobs).pipe(catchError(this.handleError));
  }

  findJob(jobName: string) {
    return this.httpClient.get(URL.url_x + ENDPOINTS_X.getJobs + jobName).pipe(catchError(this.handleError));
  }

  addSearchInDatabase(jobName: string) {
    let search = { jobName: jobName };

    this.httpClient.post(URL.url_z + ENDPOINTS_Z.search, search).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
