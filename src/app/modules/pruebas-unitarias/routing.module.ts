import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebasUnitariasComponent } from './pruebas-unitarias.component';

const routes: Routes = [
  {
    path: '',
    component: PruebasUnitariasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
