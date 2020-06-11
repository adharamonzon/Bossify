import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() name: string;
  @Input() img: string;
  @Input() description: string;
  @Input() bandMembers: Array<string>;

  constructor() {}

  ngOnInit(): void {}
}
