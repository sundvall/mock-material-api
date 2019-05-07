import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import Product from '../shared/types/product.model';
import { DataProdService } from './data-prod.service';

export class DataProdSrc implements DataSource<Product> {
  private dataExampleBehaviourSubject = new BehaviorSubject<Product[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private dataProdService: DataProdService) {}

  loadProducts(searchStr = '') {
    console.log('data-prod-src:search:', searchStr);
    this.loadingSubject.next(true);
    this.dataProdService
      .getDataFrom(searchStr)
      .pipe(
        tap(res => console.log('data-prod-src:response', res)),
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(dataExamples =>
        this.dataExampleBehaviourSubject.next(dataExamples)
      );
  }

  connect(): Observable<Product[]> {
    return this.dataExampleBehaviourSubject.asObservable();
  }

  disconnect(): void {
    this.dataExampleBehaviourSubject.complete();
    this.loadingSubject.complete();
  }
}
