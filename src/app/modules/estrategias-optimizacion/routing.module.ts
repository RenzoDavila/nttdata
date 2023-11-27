import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstrategiasOptimizacionComponent } from './estrategias-optimizacion.component';

const routes: Routes = [
  {
    path: '',
    component: EstrategiasOptimizacionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
