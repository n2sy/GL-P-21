import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import { ListPersonnesService } from '../services/list-personnes.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  @Input() tabPersonnes: Personne[];
  @Output() msgToCv = new EventEmitter<Personne>();
  constructor(private persServ: ListPersonnesService) {}

  ngOnInit(): void {
    this.tabPersonnes = this.persServ.getListPersonnes();
  }

  RecupPerson(p) {
    this.msgToCv.emit(p);
  }

  showList() {
    console.log(this.persServ.getListPersonnes());
  }
}
