import { Component, OnInit } from '@angular/core';
import bands from '../bands';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public Mybands: Array<object>;
  constructor() {
    this.Mybands = bands;
  }

  ngOnInit(): void {} //se ejecuta despues de que el componente se haya creado correctamente
}
