import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MejorasNavegacionComponent } from './mejoras-navegacion.component';
import { RoutingModule } from './routing.module';



@NgModule({
  declarations: [
    MejorasNavegacionComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class MejorasNavegacionModule { }
