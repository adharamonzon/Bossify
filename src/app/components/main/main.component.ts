import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//arrays donde se encuentra la información de todas las bandas
import bands from '../bands';
import moreBands from '../more-bands';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public Mybands: Array<object>;
  public moreBands: Array<object>;
  public values: any;
  public filterBands: Array<any>;
  constructor(private router: Router) {
    this.Mybands = bands;
    this.moreBands = moreBands;
    this.filterBands = [];
  }

  ngOnInit(): void {}
  //onSelect //Angular routing. Función para poder seleccionar una banda y acceder a su detalle.
  onSelect() {
    for (const band of bands) {
      return this.router.navigate(['/bandDetail', band.id]);
    }
  }
  //filterByName //filtrado por nombre: Obtiene el valor del imput, a través de click en el botón o dejar el foco del imput, se itera para tener un nuevo array con las bandas filtradas
  filterByName(event: any) {
    this.values = event.currentTarget.value.toLowerCase();

    for (const band of bands) {
      if (this.filterBands.length <= 0 && band.name.includes(this.values)) {
        this.filterBands.push(band);
      } else if (band.name.includes(this.values) && band.name !== this.filterBands['name']) {
        this.filterBands.push(band);
      }
    }
    console.log(this.filterBands);
  }
  //showList // función para desplegar el menú de nuevos grupos
  showList() {
    const list = document.querySelector('.add-band__list');
    list.classList.toggle('show');
  }
  //  addBand // función para encontrar la nueva banda seleccionada y añadirla al array con todas las bandas, llama a la funcion de eliminar la banda de la lista de añadir
  addBand($event) {
    let newBand;
    const newBandId = parseInt($event.toElement.id);
    moreBands.findIndex((band) => {
      if (band.id === newBandId) return (newBand = band);
    });
    this.Mybands.push(newBand);
    this.removeBandList(newBand);
  }
  //removeBandList // esta función elimina la banda de la lista de añadir y evita que se añada la banda más de una vez
  removeBandList(newBand) {
    const bandPossition = moreBands.indexOf(newBand);
    moreBands.splice(bandPossition, 1);
  }
  //findDeleteBand // esta función busca la banda que se quiere borrar, ejecuta la función de borrar y añadir a la lista de más bandas
  findDeleteBand($event) {
    let bandToDelete;
    const deleteBandId = parseInt($event.toElement.id);
    bands.findIndex((band) => {
      if (band.id === deleteBandId) {
        bandToDelete = band;
      }
    });
    this.deleteBand(bandToDelete);
    this.addBandToList(bandToDelete);
  }
  //deleteBand // borra la banda de la lista principal
  deleteBand(bandToDelete) {
    const bandPosition = bands.indexOf(bandToDelete);
    bands.splice(bandToDelete, 1);
  }
  // addBandToList // añade la banda a la lista de más bandas
  addBandToList(bandToDelete) {
    moreBands.push(bandToDelete);
  }
}
