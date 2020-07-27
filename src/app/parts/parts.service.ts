import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Part } from './Part';
import { URL, ENDPOINTS_X, ENDPOINTS_Y, ENDPOINTS_Z } from '@app/api.config';
import { catchError } from 'rxjs/operators';
import { PartsOrder } from './PartsOrder';
import { PartOrderCompany } from './PartOrderCompany';

@Injectable({
  providedIn: 'root',
})
export class PartsService {
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

  getParts() {
    console.log('Fetching parts');
    return this.httpClient.get(URL.url_y + ENDPOINTS_Y.getParts).pipe(catchError(this.handleError));
  }

  checkUser(userId: string, jobName: string) {
    let httpHeader = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    return this.httpClient
      .get(URL.url_z + ENDPOINTS_Z.checkUser + userId + '/' + jobName, { headers: httpHeader })
      .pipe(catchError(this.handleError));
  }

  updatePartQty(partsOrder: PartsOrder[]) {
    partsOrder.forEach((order) => {
      this.updateQuantity(order.partName, order.partId, order.qoh - order.qty).subscribe((data) => {
        console.log(`${order.partId} updated`);
      });
    });
  }

  updateQuantity(partName: string, partId: number, qty: number) {
    let part: Part = {
      partName: partName,
      partId: partId,
      qoh: qty,
    };

    return this.httpClient.put(URL.url_y + ENDPOINTS_Y.getParts, part).pipe(catchError(this.handleError));
  }

  getOrderCount() {
    return this.httpClient.get(URL.url_x + ENDPOINTS_X.makeOrder);
  }

  makeEntryInXY(partsOrder: PartsOrder[]) {
    let count: number;
    this.getOrderCount().subscribe(
      (data) => {
        count = data['Items'].length;
        console.log(count);
        partsOrder.forEach((order) => {
          let partOrderCompanyX = {
            partOrderId: count,
            partId: order.partId,
            jobName: order.jobName,
            userId: order.userId,
            qty: order.qty,
          };

          let partOrderCompanyY = {
            partOrdersId: count,
            partId: order.partId,
            jobName: order.jobName,
            userId: order.userId,
            qty: order.qty,
          };

          console.log('Making Entry in X');

          this.httpClient.post(URL.url_x + ENDPOINTS_X.makeOrder, partOrderCompanyX).subscribe(
            (data) => {
              console.log(data);
            },
            (error) => {
              console.log(error);
            }
          );

          console.log('Making Entry in Y');

          this.httpClient.post(URL.url_y + ENDPOINTS_Y.makeOrder, partOrderCompanyY).subscribe(
            (data) => {
              console.log(data);
            },
            (error) => {
              console.log(error);
            }
          );
        });
      },
      (error) => {
        count = -1;
      }
    );
  }

  placeOrder(partsOrder: PartsOrder[], result: string) {
    console.log('Parts Service: Placing Order with result: ' + result);
    if (result == 'success') {
      this.updatePartQty(partsOrder);
      this.makeEntryInXY(partsOrder);
      // makeEntryInY();
    }
    let order = { parts: this.removePartName(partsOrder) };

    console.log('Order Data');
    console.log(order);

    let httpHeader = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    return this.httpClient
      .post(URL.url_z + ENDPOINTS_Z.makePartsOrder, order, { headers: httpHeader })
      .pipe(catchError(this.handleError));
  }

  removePartName(partsOrder: PartsOrder[]) {
    partsOrder.forEach((order) => {
      delete order.partName;
      delete order.qoh;
    });

    return partsOrder;
  }
}
