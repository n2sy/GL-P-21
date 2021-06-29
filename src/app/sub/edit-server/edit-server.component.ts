import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrerServersService } from '../grer-servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  editedServeur;
  constructor(private actRoute : ActivatedRoute,
    private servService : GrerServersService) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(
      (p) => {
        this.editedServeur = this.servService.getServerByid(p.get('id'))
      }
    );
  }

 

}
