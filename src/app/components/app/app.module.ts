import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routingComponents } from './app-routing.module';

//hay que importar todos nuestros componentes
import { HeaderComponent } from '../header/header.component';
import { MainComponent } from '../main/main.component';

const routes: Routes = [{ path: 'bandDetail/:id', loadChildren: () => import('../detail-bands/detail-bands.module').then((m) => m.DetailBandsModule) }];

@NgModule({
  declarations: [
    //aquí se agregan los componentes y se puede usar en cualquier parte de la aplicación
    AppComponent,
    HeaderComponent,
    MainComponent,
    routingComponents,
  ],
  imports: [BrowserModule, AppRoutingModule],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent], //componente principal en el cual se va a cargar la aplicación
})
export class AppModule {}
