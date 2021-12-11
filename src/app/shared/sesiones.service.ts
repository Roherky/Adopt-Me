import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {

  private url = "http://localhost:3000/login";

  constructor(private http: HttpClient) { }

  public postLogin(login: Login){
    // console.log(login);
    return this.http.post(this.url, login);
  }
}
