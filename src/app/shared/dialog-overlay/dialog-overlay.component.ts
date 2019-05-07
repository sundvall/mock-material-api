import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import ProductPackage from '../types/product-package.model';
@Component({
  selector: 'app-dialog-overlay',
  templateUrl: './dialog-overlay.component.html',
  styleUrls: ['./dialog-overlay.component.scss']
})
export class DialogOverlayComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogOverlayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    console.log('dialog-overlay:onNoClick');
    this.dialogRef.close();
  }
}

export interface DialogData {
  productId: string;
  productName: string;
  info: string;
  packages: ProductPackage[];
  restrictions: string;
}
