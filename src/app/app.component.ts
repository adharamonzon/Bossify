import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //la vista que se muestra al usuario, la logíca está dentro del componente, está la estructura del html en concreto
  styleUrls: ['./app.component.css']
  //estilos específicos para este componente
})
export class AppComponent {
  title = 'Angular Rocks';
}
