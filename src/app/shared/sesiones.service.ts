import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {

  public tipo: string;
  public id_usuario: number;
  private urlLogin = "http://localhost:300/login";

  constructor(private http: HttpClient) { }


  public postLogin(login: Login){
    return this.http.post(this.urlLogin, login);
  }

  public saveData(data: Login){
    if(data.id_adoptante == null){
      this.tipo = "protectora";
      this.id_usuario = data.id_protectora;
    }
    else {
      this.tipo = "adoptante";
      this.id_usuario = data.id_adoptante;
      console.log(this.tipo);
      console.log(this.id_usuario);
    }
  }

  isAuth(): boolean {
    const almacenamientoLocal = localStorage.getItem('token');
    return true;
  }
}