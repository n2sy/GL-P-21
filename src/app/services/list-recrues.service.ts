import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root',
})
export class ListRecruesService {
  private listRecrues: Personne[] = [];
  constructor() {}

  getListRecrues() {
    return this.listRecrues;
  }

  addRecrue(p) {
    console.log(this.listRecrues.indexOf(p));

    if (this.listRecrues.indexOf(p) == -1) this.listRecrues.push(p);
    else alert('Cette personne a déjà été recrutée');
  }
}
