import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {

  public tipo: string;
  // protectora te pinto algo
  public id_usuario: number;
  private urlLogin = "https://adopt-me2021.herokuapp.com/login";

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

  clearSesion(){
    this.tipo = null;
    this.id_usuario = null;
  }

  isAuth(): boolean {
    const almacenamientoLocal = localStorage.getItem('token');
    return true;
  }
}
