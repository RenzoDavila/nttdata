import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATH_URL_DATA } from './constants/constants';

const routes: Routes = [
  {
    path: PATH_URL_DATA[0],
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },

  {
    path: PATH_URL_DATA[1],
    loadChildren: () => import('./modules/manejo-datos/manejo-datos.module').then(m => m.ManejoDatosModule),
  },

  {
    path: PATH_URL_DATA[2],
    loadChildren: () => import('./modules/mejoras-navegacion/mejoras-navegacion.module').then(m => m.MejorasNavegacionModule),
  },

  {
    path: PATH_URL_DATA[3],
    loadChildren: () => import('./modules/estrategias-optimizacion/estrategias-optimizacion.module').then(m => m.EstrategiasOptimizacionModule),
  },

  {
    path: PATH_URL_DATA[4],
    loadChildren: () => import('./modules/pruebas-unitarias/pruebas-unitarias.module').then(m => m.PruebasUnitariasModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
