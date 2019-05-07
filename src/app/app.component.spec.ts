import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatTableAllComponent } from './shared/mat-table-all/mat-table-all.component';
import { MaterialCollectionModule } from './shared/material-collection.module';
import { DataProdService } from './services/data-prod.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        MaterialCollectionModule,
      ],
      declarations: [AppComponent, MatTableAllComponent],
      providers: [DataProdService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
