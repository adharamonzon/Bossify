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
  public values: any;
  public filterBands: Array<object>;
  constructor(private router: Router) {
    this.Mybands = bands;
    this.filterBands = [];
  }

  ngOnInit(): void {} //se ejecuta despues de que el componente se haya creado correctamente
  onSelect() {
    for (const band of bands) {
      return this.router.navigate(['/bandDetail', band.id]);
    }
  }
  filterByName(event: any) {
    this.values = event.currentTarget.value.toLowerCase();

    for (const band of bands) {
      if (band.name.includes(this.values)) {
        this.filterBands.push(band);
      }
      console.log(this.filterBands);
    }
  }
}
