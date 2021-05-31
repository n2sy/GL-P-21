import { Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable({
  providedIn: 'root',
})
export class FirstService {
  constructor(private secondService: SecondService) {}

  showMsg() {
    console.log('Je suis First Service !');
    this.secondService.afficherMsg();
  }
}
