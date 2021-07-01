import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Personne } from '../models/personne';
import { ListPersonnesService } from '../services/list-personnes.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  pers;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private persServ: ListPersonnesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (res: ParamMap) => {
        this.pers = this.persServ.getPersonByIdAPI(res.get('id')).subscribe(
          (response) => {
            this.pers = response;
          },
          (error) => {
            console.log('Problem with getPersonById');
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updatePers() {
    console.log(this.pers);
    this.persServ.updatePersonAPI(this.pers).subscribe(
      (response) => {
        this.router.navigateByUrl('/cv');
      },
      (error) => {
        console.log('Problem with UpdatePerson');
      }
    );
  }
}
