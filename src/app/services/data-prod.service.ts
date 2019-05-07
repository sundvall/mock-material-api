import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Product from '../shared/types/product.model';

/**
 * Get list of items from server.
 * ref:
 * https://github.com/angular/in-memory-web-api/blob/master/src/app/http-client-hero.service.ts
 */

@Injectable()
export class DataProdService {
  private url = '/api/v1/products';
  constructor(private http: HttpClient) {}

  private handleError(error: any) {
    console.error('data-prod:handleError: An error occurred', error); // for demo purposes only
    return throwError(error);
  }

  getDataFrom(searchStr: string): Observable<Product[]> {
    const query = searchStr ? `?productname=^${searchStr}` : '';
    const url = environment.production
      ? `${this.url}/${searchStr}`
      : `${this.url}${query}`;
    console.log('data-prod.service:getDataFrom:url:', url);
    return this.http.get<Product[]>(url).pipe(catchError(this.handleError));
  }
}
