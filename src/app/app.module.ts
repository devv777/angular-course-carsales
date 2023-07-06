import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa o RouterModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule // Adiciona o RouterModule às importações
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
