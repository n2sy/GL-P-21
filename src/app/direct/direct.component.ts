import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css'],
})
export class DirectComponent implements OnInit {
  c1Value = true;
  c2Value = false;
  c3Value = false;
  constructor() {}

  ngOnInit(): void {}
  changeStyle() {
    if (this.c1Value) {
      this.c1Value = false;
      this.c2Value = true;
    } else if (this.c2Value) {
      this.c2Value = false;
      this.c3Value = true;
    } else {
      this.c3Value = false;
      this.c1Value = true;
    }
  }
}
