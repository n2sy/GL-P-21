import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name: string = 'Mehdi';
  @Input() bgColor = 'yellow';
  hd: boolean = false;

  @Output() sendMsg = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  changeColor() {
    this.bgColor = 'pink';
  }

  changeHd() {
    this.hd = !this.hd;
  }

  EmitEvt() {
    this.sendMsg.emit('Message envoyé par le composant enfant');
  }
}
