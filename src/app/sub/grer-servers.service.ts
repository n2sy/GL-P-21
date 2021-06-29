import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrerServersService {
  private tabServers = [
    {
      id : 1,
      nom : 'Serveur de production',
      status : 'online'
    },
    {
      id : 2,
      nom : 'Serveur de test',
      status : 'offline'
    },
    {
      id : 3,
      nom : 'Serveur de développement',
      status : 'online'
    },
  ]

  constructor() { }

  getListServers() {
    return this.tabServers;
  }

  getServerByid(id) {
    return this.tabServers.find((s) => s.id == id);
  }
}
