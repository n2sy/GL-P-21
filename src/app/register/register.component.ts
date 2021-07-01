import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onRegister(identifiants) {
    this.loginService.Register(identifiants).subscribe(
      (response) => {
        console.log(response['message']);
        this.router.navigateByUrl('/cv');
      },
      (err) => {
        console.log('Problem with Register', err);
      }
    );
  }
}
