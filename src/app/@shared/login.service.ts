import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { URL, ENDPOINTS_Z } from '@app/api.config';
import { throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _loggedIn = new BehaviorSubject<boolean>(false);
  public userId = '';

  get loggedIn() {
    return this._loggedIn.asObservable();
  }

  setLoggedIn(value: boolean) {
    this._loggedIn.next(value);
  }

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
      return throwError(error);
    }
    // return an observable with a user-facing error message
  }

  validateUser(bodyData: { userId: string; password: string }) {
    return this.httpClient.post(URL.url_z + ENDPOINTS_Z.authenticate, bodyData).pipe(catchError(this.handleError));
  }
}
