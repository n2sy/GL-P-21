import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root',
})
export class ListPersonnesService {
  private listPersonne: Personne[] = [
    new Personne('1', 'Jelassi', 'Nidhal', 'Enseignant', 35, 'nidhal.jpg'),
    new Personne('2', 'Simpson', 'Bart', 'Ingénieur', 15, 'bart.jpeg'),
    new Personne('3', 'Simpson', 'Homer', 'Chef de projet', 53, 'homer.jpg'),
    new Personne('4', 'Simpson', 'Marge', 'Chef de projet', 53),
  ];
  constructor() {}

  getListPersonnes() {
    return this.listPersonne;
  }

  addPerson() {
    this.listPersonne.push(
      new Personne('4', 'New', 'Person', 'Chef de projet', 53, 'nidhal.jpg')
    );
  }
}
