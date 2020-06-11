import { Component } from '@angular/core';


@Component({
  selector: 'first-component',
  templateUrl: './first-component.component.html',

})
//no se cierra con punto y coma
//dos propiedades obligatorias: selector (indicamos el nombre de la etiqueta que se genera en html) y el template (se puede meter la url al template
//o escribir dentro la estructura html entre comillas graves ``)

export class firstComponent {
  public title: string;
  public subtitle: string;
  public year: number;

  constructor() {
    console.log('mi componente cargado!');
    this.title = 'Mi primer componente',
      this.subtitle = 'aquí puedo meter todo el html que quiera'
    this.year = 2020;
  }
}