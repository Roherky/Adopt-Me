import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {

  private urlLogin = "http://localhost:300/login";

  constructor(private http: HttpClient) { }


  public postLogin(login: Login){
    // console.log(login);
    return this.http.post(this.urlLogin, login, {responseType: "text"});
  }

  isAuth(): boolean {
    const almacenamientoLocal = localStorage.getItem('token');
    return true;
  }
}