import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css'],
})
export class MsWordComponent implements OnInit {
  listFonts = ['', 'Phosphate', 'Impact', 'Arial'];
  bgColor;
  textColor;
  fontSize;
  fontFamily;
  constructor() {}

  ngOnInit(): void {}

  changeSize(inp) {
    //console.log(inp.value);

    this.fontSize = inp.value + 'px';
  }
}
