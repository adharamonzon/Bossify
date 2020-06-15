import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// importar todos mis componentes
import { HeaderComponent } from '../header/header.component';
import { MainComponent } from '../main/main.component';
import { DetailComponent } from '../detail/detail.component';

const routes: Routes = [{ path: 'bandDetail/:id', component: DetailComponent }];

@NgModule({
  declarations: [
    // se agregan los componentes y se puede usar en cualquier parte de la aplicación
    AppComponent,
    HeaderComponent,
    MainComponent,
    DetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent], //componente principal en el cual se va a cargar la aplicación
})
export class AppModule {}
