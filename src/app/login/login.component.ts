import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  defaultSection = 'dmwm';
  myComment = 'Rien à signaler...';
  acc = false;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(f) {
    console.log(f.value);
  }

  onLogin(f) {
    this.loginService.login(f.value).subscribe(
      (response) => {
        console.log(response);
        localStorage.setItem('mytoken', response['token']);
        this.router.navigateByUrl('/cv');
      },
      (error) => {
        console.log(error);
        this.acc = true;
        f.reset();
      }
    );
  }

  resetForm(f) {
    f.reset();
  }

  GenerateRandomPwd(f) {
    f.setValue({
      identifiants: {
        login: '',
        password: 'GL-P-2021',
      },
      section: '',
      commentaire: '',
    });
  }

  GenerateRandomPwd2(f) {
    f.form.patchValue({
      identifiants: {
        password: 'GL-P-2021',
      },
    });
  }
}
