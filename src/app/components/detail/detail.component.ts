import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import bands from '../bands';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public Mybands: Array<object>;
  public id;
  public name;
  public image;
  public description;
  public bandMembers;

  constructor(private route: ActivatedRoute) {
    this.Mybands = bands;
    for (const band of bands) {
      if (band.id === parseInt(this.route.snapshot.paramMap.get('id'))) {
        this.id = band.id;
        this.name = band.name;
        this.image = band.image;
        this.description = band.description;
        this.bandMembers = band.bandMembers;
      }
    }
  }

  ngOnInit(): void {}
}
