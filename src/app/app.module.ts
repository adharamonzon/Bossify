import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//hay que importar todos nuestros componentes
import { firstComponent } from './components/first-component/first-component.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    //aquí se agregan los componentes y se puede usar en cualquier parte de la aplicación
    AppComponent,
    firstComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] //componente principal en el cual se va a cargar la aplicación
})
export class AppModule { }
