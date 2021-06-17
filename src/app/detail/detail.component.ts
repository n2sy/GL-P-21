import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../models/personne';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() selectedPersonne: Personne;
  constructor(private recServ: ListRecruesService, private router: Router) {}

  ngOnInit(): void {}

  addNewRecrue() {
    this.recServ.addRecrue(this.selectedPersonne);
  }

  goToInfos() {
    this.router.navigate(['cv', this.selectedPersonne._id]);
  }
}
