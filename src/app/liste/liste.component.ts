import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  @Input() tabPersonnes: Personne[];
  @Output() msgToCv = new EventEmitter<Personne>();
  constructor() {}

  ngOnInit(): void {}

  RecupPerson(p) {
    this.msgToCv.emit(p);
  }
}
