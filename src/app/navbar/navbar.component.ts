import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private logServ: LoginService) {}

  ngOnInit(): void {}

  estConnecte() {
    return this.logServ.isLogged();
  }

  seDeconnecter() {
    this.logServ.logout();
  }
}
