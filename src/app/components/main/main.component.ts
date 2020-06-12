import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import bands from '../bands';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public Mybands: Array<object>;
  constructor(private router: Router) {
    this.Mybands = bands;
  }

  ngOnInit(): void {} //se ejecuta despues de que el componente se haya creado correctamente
  onSelect() {
    for (const band of bands) {
      return this.router.navigate(['/bandDetail', band.id]);
    }
  }
}
