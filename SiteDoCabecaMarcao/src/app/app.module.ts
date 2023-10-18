import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho/cabecalho.component';
import { PrincipalComponent } from './componentes/principal/princial/princial.component';

@NgModule({
  declarations: [AppComponent, PrincipalComponent, CabecalhoComponent],
  imports: [BrowserModule, AppRoutingModule],
  exports: [PrincipalComponent, CabecalhoComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// ng generate component componentes/principal/princial