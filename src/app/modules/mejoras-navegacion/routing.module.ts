import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MejorasNavegacionComponent } from './mejoras-navegacion.component';

const routes: Routes = [
  {
    path: '',
    component: MejorasNavegacionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
