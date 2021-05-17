import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  parentColor = 'green';
  constructor() {}

  ngOnInit(): void {}

  traitementDeEvt(msg) {
    alert(msg);
  }
}
