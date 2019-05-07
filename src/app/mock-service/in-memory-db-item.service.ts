import { InMemoryDbService } from 'angular-in-memory-web-api';
import Product from '../shared/types/product.model';
import * as responseJson from './mocks/response-1.json';
/**
 * Mocked response database.
 * ref:
 * https://github.com/angular/in-memory-web-api
 * 
 * The return value from 'createDb' must correspond to 'data-prod.service.ts: private url = '/api/v1/products/';
 */
export class InMemoryDbItemService implements InMemoryDbService {
  createDb() {
    const products: Product[] = [].concat(responseJson)[0].default;
    return { products };
  }
}
