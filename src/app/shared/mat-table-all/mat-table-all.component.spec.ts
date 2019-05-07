import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableAllComponent } from './mat-table-all.component';
import { MaterialCollectionModule } from '../material-collection.module';
import { RouterTestingModule } from '@angular/router/testing';
import { DataProdService } from 'src/app/services/data-prod.service';
import { HttpClientModule } from '@angular/common/http';

describe('MatTableAllComponent', () => {
  let component: MatTableAllComponent;
  let fixture: ComponentFixture<MatTableAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MaterialCollectionModule,
        RouterTestingModule
      ],
      declarations: [MatTableAllComponent],
      providers: [DataProdService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
