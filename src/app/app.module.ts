import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDbItemService } from './mock-service/in-memory-db-item.service';
import { MaterialCollectionModule } from './shared/material-collection.module';
import { MatTableAllComponent } from './shared/mat-table-all/mat-table-all.component';
import { DataProdService } from './services/data-prod.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogOverlayComponent } from './shared/dialog-overlay/dialog-overlay.component';
import { FormsModule } from '@angular/forms';
/**
 * Always import the HttpClientInMemoryWebApiModule after HttpClientModule.(see package repo.)
 * 
 * The value for "apiBase: 'api/v1'" must correspond to the
 * "private url = '/api/v1/products/';"
 * See 'data-prod.service.ts'.
 * 
*/

@NgModule({
  declarations: [AppComponent, MatTableAllComponent, DialogOverlayComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forRoot(InMemoryDbItemService, {
          apiBase: 'api/v1',
          delay: 100
        }),
    MaterialCollectionModule
  ],
  providers: [DataProdService],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverlayComponent]
})
export class AppModule {}
