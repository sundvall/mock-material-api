import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDialogModule
} from '@angular/material';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  exports: [
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: []
})
export class MaterialCollectionModule {}
