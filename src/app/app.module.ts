import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//hay que importar todos nuestros componentes
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [{ path: 'bandDetail/:id', component: DetailComponent }];

@NgModule({
  declarations: [
    //aquí se agregan los componentes y se puede usar en cualquier parte de la aplicación
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
