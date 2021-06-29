import { Component, OnInit } from '@angular/core';
import { GrerServersService } from '../grer-servers.service';

@Component({
  selector: 'app-list-servers',
  templateUrl: './list-servers.component.html',
  styleUrls: ['./list-servers.component.css']
})
export class ListServersComponent implements OnInit {
  listServers = [];

  constructor(private servService : GrerServersService) { }

  ngOnInit(): void {
    this.listServers = this.servService.getListServers();
  }

}
