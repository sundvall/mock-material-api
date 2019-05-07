# angular material + mock api

The application connects to a mocked database and displays the result in an angular-material table.

## Setup
The endpoint url must correspond to the baseUrl in app.module.ts.
```javascript
// data-prod.service.ts
private url = '/api/v1/products/';
...
// get an array of Products
return this.http.get<Product[]>(url).pipe(catchError(this.handleError));
```
```javascript
// in-memory-db-item.service.ts
createDb() {
    const products: Product[] = [].concat(responseJson)[0].default;
    return { products };
  }
```
Connect data to the angular-material table:
```javascript
// mat-table-all.component.ts
import { DataProdService } from '../../services/data-prod.service';
//...
constructor(
    private dataProdService: DataProdService,
    //...

  ngOnInit() {
    this.dataSource = new DataProdSrc(this.dataProdService);
    this.dataSource.loadProducts('/* initial search */');
  }
```


## Angular 7 usage:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.
It was modified to use jest and protractor for testing.


## Install
Install ng cli.
https://cli.angular.io/

Install yarn.
https://yarnpkg.com/en/docs/getting-started

Remove file package-lock.json if it exists.

cd materialMockApiLab;
Run `yarn` to build node_modules.

Install yarn.
https://yarnpkg.com/en/docs/getting-started

## Development server
cd materialMockApiLab;
Run `yarn start`
(This will run `ng serve`)
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Mock api
There is a mock api to support development without external endpoints. See the files of 'app.module->HttpClientInMemoryWebApiModule' and 'app/mock-service' directory. This system is enabled for non-production build.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `yarn build`.
This will run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Tests
The app is configured to use [Jest](https://jestjs.io/) together with [Puppeteer](https://developers.google.com/web/tools/puppeteer/) for both unit and e2e tests.

## Running unit tests
Run `yarn test` to run all unit tests and e2e tests. 

## Running end-to-end tests
Run `yarn e2e` to run all unit tests and e2e tests.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
