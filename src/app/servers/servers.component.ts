import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  listServers = [
    {
      name: 'Production Server',
      type: 'medium',
      startDate: new Date(),
      status: 'critical',
    },
    {
      name: 'Testing Server',
      type: 'large',
      startDate: new Date(),
      status: 'stable',
    },
    {
      name: 'Development Server',
      type: 'small',
      startDate: new Date(),
      status: 'offline',
    },
    {
      name: 'Nidhal Server',
      type: 'medium',
      startDate: new Date(),
      status: 'stable',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  chooseClass(stat) {
    return {
      'list-group-item-success': stat == 'stable',
      'list-group-item-danger': stat == 'critical',
      'list-group-item-warning': stat == 'offline',
    };
  }
}
