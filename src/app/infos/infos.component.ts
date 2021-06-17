import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Personne } from '../models/personne';
import { ListPersonnesService } from '../services/list-personnes.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  pers: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private persServ: ListPersonnesService
  ) {}

  ngOnInit(): void {
    //this.id = this.activatedRoute.snapshot.paramMap.get('id');
    //console.log(this.id);

    this.activatedRoute.paramMap.subscribe(
      (res: ParamMap) => {
        this.pers = this.persServ.getPersonById(res.get('id'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
