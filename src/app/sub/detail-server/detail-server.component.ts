import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrerServersService } from '../grer-servers.service';

@Component({
  selector: 'app-detail-server',
  templateUrl: './detail-server.component.html',
  styleUrls: ['./detail-server.component.css']
})
export class DetailServerComponent implements OnInit {
  myServeur;
  ds;
  constructor(private actRoute : ActivatedRoute,
    private servService : GrerServersService) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(
      (p) => {
        this.myServeur = this.servService.getServerByid(p.get('id'))
      }
    );

    this.actRoute.queryParamMap.subscribe(
      (q) => {
        this.ds = q.get("allowEdit") == '1' ? false : true;
      }
    )
  }

}
