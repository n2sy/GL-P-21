import { HttpClient } from '@angular/common/http';
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
  listPersonne = [];
  selectedPers: Personne;

  constructor(private persServ: ListPersonnesService) //private http: HttpClient
  {
    //console.log('constructor');
  }

  ngOnInit(): void {
    //console.log('ngOnInit');
    //this.firstServ.showMsg();
    this.persServ.getListPersonnesAPI().subscribe(
      (response) => {
        this.listPersonne = response['allPersons'];
      },
      (error) => {
        console.log('Problem with getListPersons', error);
      }
    );

    // this.http.get('https://jsonplaceholder.typicode.com/uuusers').subscribe(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log('Erreur Nidhal', error);
    //   },
    //   () => {
    //     console.log("That's all !");
    //   }
    // );
  }

  RecupPers(p) {
    this.selectedPers = p;
  }

  // addNewPerson() {
  //   this.persServ.addPerson();
  //   console.log(this.persServ.getListPersonnes());
  // }
}
