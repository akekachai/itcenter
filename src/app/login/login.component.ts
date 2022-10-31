import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import {CheckboxModule} from 'primeng/checkbox';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  _roles ='';

  constructor(private authService:AuthService,private tokenStorage:StorageService,private activetedRoute:ActivatedRoute,private router:Router) { }

  redirecUrl: any='';

  ngOnInit(): void {
    this.redirecUrl = this.activetedRoute.snapshot.queryParamMap.get('redirecUrl') ||'/';

  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken('Bearer ' + data.jwtToken);
        this.tokenStorage.saveRefreshToken(data.refreshToken);
        this.tokenStorage.saveUser(data.data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        console.log( 'Role :' + this.tokenStorage.getUser().roleCode);
        this.roles = this.tokenStorage.getUser().roleCode;
        this._roles = this.tokenStorage.getUser().roleCode; 
        console.log(this.redirecUrl);
        this.router.navigate([this.redirecUrl]);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

}
