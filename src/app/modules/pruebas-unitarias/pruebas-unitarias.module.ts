import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebasUnitariasComponent } from './pruebas-unitarias.component';
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PruebasUnitariasComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class PruebasUnitariasModule { }
