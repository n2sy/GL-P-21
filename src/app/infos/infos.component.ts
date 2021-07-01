import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Personne } from '../models/personne';
import { ListPersonnesService } from '../services/list-personnes.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  pers;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private persServ: ListPersonnesService
  ) {}

  ngOnInit(): void {
    //this.id = this.activatedRoute.snapshot.paramMap.get('id');
    //console.log(this.id);

    this.activatedRoute.paramMap.subscribe(
      (res: ParamMap) => {
        this.persServ.getPersonByIdAPI(res.get('id')).subscribe(
          (response) => {
            this.pers = response;
          },
          (error) => {
            console.log('Problem with getPersonById', error);
          }
        );
      },
      (err) => {
        console.log('Error with ParamMap', err);
      }
    );
  }

  deletePers() {
    if (confirm('Etes-vous sur de vouloir supprimer cette personne ?')) {
      this.persServ.deletePersonAPI(this.pers._id).subscribe(
        (response) => {
          console.log(response['message']);
          this.router.navigateByUrl('/cv');
        },
        (error) => {
          console.log('Problem with DeletePerson');
        }
      );
    }
  }
}
