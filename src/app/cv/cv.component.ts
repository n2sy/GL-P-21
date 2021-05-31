import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import { FirstService } from '../services/first.service';
import { ListPersonnesService } from '../services/list-personnes.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  listPersonne: Personne[] = [];
  selectedPers: Personne;
  constructor(private persServ: ListPersonnesService) {
    //console.log('constructor');
  }

  ngOnInit(): void {
    //console.log('ngOnInit');
    //this.firstServ.showMsg();
    this.listPersonne = this.persServ.getListPersonnes();
  }

  RecupPers(p) {
    this.selectedPers = p;
  }

  addNewPerson() {
    this.persServ.addPerson();
    console.log(this.persServ.getListPersonnes());
  }
}
