import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  MatPaginator,
  MatSort,
  MatDialog,
} from '@angular/material';
import { DataProdService } from '../../services/data-prod.service';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { fromEvent, merge } from 'rxjs';
import { DataProdSrc } from '../../services/data-prod-src.datasource';
import Product from '../types/product.model';
import { DialogOverlayComponent } from '../dialog-overlay/dialog-overlay.component';

@Component({
  selector: 'app-mat-table-all',
  templateUrl: './mat-table-all.component.html',
  styleUrls: ['./mat-table-all.component.scss']
})
export class MatTableAllComponent implements OnInit, AfterViewInit {
  medProduct: Product;
  dataSource: DataProdSrc;
  displayedColumns = ['productId', 'productName', 'productInfo'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  constructor(
    private dataProdService: DataProdService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.dataSource = new DataProdSrc(this.dataProdService);
    console.log('mat-table-all:ngOnInit: data-prod.service: initial list from search fetches all products');
    this.dataSource.loadProducts();
  }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          const searchStr: string = this.input.nativeElement.value;
          this.loadProductPage(searchStr);
        })
      )
      .subscribe();
  }

  loadProductPage(searchStr: string) {
    this.dataSource.loadProducts(searchStr);
  }

  openDialog(row): void {
    console.log('mat-table-all.component.ts:openDialog:row:', row);
    const { info, productId, productName, packages, restrictions } = row;
    console.log('mat-table-all.component.ts:openDialog:packages:', packages);
    const dialogRef = this.dialog.open(DialogOverlayComponent, {
      width: '350px',
      data: { info, productId, productName, packages, restrictions }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('mat-table-all.component.ts:openDialog:afterClosed:result:', result);
    });
  }

  onRowClicked(row: any) {
    console.log('mat-table-all.component.ts:onRowClicked: row;', row);
    this.openDialog(row);
  }
}
