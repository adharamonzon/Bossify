import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public title: string;
  public values: any;
  constructor() {
    this.title = 'Rock Bands';
  }
  filterByName(event: any) {
    this.values = event.currentTarget.value;
  }
  ngOnInit(): void {}
}
