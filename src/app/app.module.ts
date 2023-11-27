import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpErrorResponseInterceptor } from './providers/interceptors';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [provideHttpClient(withInterceptors([httpErrorResponseInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule { }
