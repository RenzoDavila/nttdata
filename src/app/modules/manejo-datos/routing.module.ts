import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManejoDatosComponent } from './manejo-datos.component';

const routes: Routes = [
  {
    path: '',
    component: ManejoDatosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
