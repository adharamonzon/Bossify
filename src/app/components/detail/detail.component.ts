import { Component, OnInit, Input } from '@angular/core';
import bands from '../bands';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  public Mybands: Array<object>;
  @Input() name: string;
  @Input() img: string;
  @Input() description: string;
  @Input() bandMembers: Array<string>;

  constructor() {
    this.Mybands = bands;
  }

  ngOnInit(): void {}
}
