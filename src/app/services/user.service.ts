import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const TOKEN_KEY = window.sessionStorage.getItem('auth-token');
const API_URL = 'https://api-dev.sabuyfood.plus/v1/Users';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': `${TOKEN_KEY}` }),
 

};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  getUserBoard(): Observable<any> {
    console.log(TOKEN_KEY);
    return this.http.get(API_URL+ '/information', httpOptions);
  }
}
