import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatTableAllComponent } from './shared/mat-table-all/mat-table-all.component';

const routes: Routes = [
  { path: 'products', component: MatTableAllComponent },
  { path: 'products/:id', component: MatTableAllComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
