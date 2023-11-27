import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManejoDatosComponent } from './manejo-datos.component';
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ManejoDatosComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule
  ]
})
export class ManejoDatosModule { }
