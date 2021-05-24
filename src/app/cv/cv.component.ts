import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  listPersonne: Personne[] = [
    new Personne('1', 'Jelassi', 'Nidhal', 'Enseignant', 35, 'nidhal.jpg'),
    new Personne('2', 'Simpson', 'Bart', 'Ingénieur', 15, 'bart.jpeg'),
    new Personne('3', 'Simpson', 'Homer', 'Chef de projet', 53, 'homer.jpg'),
  ];
  selectedPers: Personne;
  constructor() {}

  ngOnInit(): void {}

  RecupPers(p) {
    this.selectedPers = p;
  }
}
