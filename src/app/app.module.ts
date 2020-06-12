import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//hay que importar todos nuestros componentes
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { DetailComponent } from './components/detail/detail.component';

const rutas: Routes = [
  {
    path: '',
    //con el path vacío es necesario el pathMatch 'full'
    component: MainComponent,
    pathMatch: 'full',
  },
  { path: 'band-detail/:id', component: DetailComponent },
];
@NgModule({
  declarations: [
    //aquí se agregan los componentes y se puede usar en cualquier parte de la aplicación
    AppComponent,
    HeaderComponent,
    MainComponent,
    DetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(rutas, {})],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent], //componente principal en el cual se va a cargar la aplicación
})
export class AppModule {}
