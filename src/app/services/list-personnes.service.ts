import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root',
})
export class ListPersonnesService {
  link = 'http://localhost:3000/cv/persons';
  private listPersonne: Personne[] = [
    new Personne('1', 'Jelassi', 'Nidhal', 'Enseignant', 35, 'nidhal.jpg'),
    new Personne('2', 'Simpson', 'Bart', 'Ingénieur', 15, 'bart.jpeg'),
    new Personne('3', 'Simpson', 'Homer', 'Chef de projet', 53, 'homer.jpg'),
    new Personne('4', 'Simpson', 'Marge', 'Chef de projet', 53),
  ];
  constructor(private http: HttpClient) {}

  getListPersonnes() {
    return this.listPersonne;
  }

  getListPersonnesAPI() {
    return this.http.get(this.link);
  }

  addPerson(p) {
    p._id = this.listPersonne[this.listPersonne.length - 1]._id + 1;
    this.listPersonne.push(p);
  }

  addPersonAPI(p) {
    return this.http.post(this.link, p);
  }

  getPersonById(id) {
    return this.listPersonne.find((p) => p._id == id);
  }

  getPersonByIdAPI(id) {
    return this.http.get(`${this.link}/${id}`);
  }

  deletePerson(p) {
    let i = this.listPersonne.indexOf(p);
    this.listPersonne.splice(i, 1);
  }

  deletePersonAPI(id) {
    return this.http.delete(`${this.link}/${id}`);
  }

  updatePerson(p) {
    let i = this.listPersonne.indexOf(p);
    this.listPersonne[i] = p;
  }

  updatePersonAPI(p) {
    return this.http.put(`${this.link}/${p._id}`, p);
  }
}
