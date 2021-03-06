import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {

  public tipo: string;
  public id_usuario: number;
  private urlLogin = "https://adopt-me2021.herokuapp.com/login";
  public id_login1: number;
  public id_login2: number;

  constructor(private http: HttpClient) { }

  public getIDLogin(id: number){
    let url = `https://adopt-me2021.herokuapp.com/idlogin1?id=${id}`;
    return this.http.get(url);
  }

  public getIDLogin2(id: number){
    let url = `https://adopt-me2021.herokuapp.com/idlogin2?id=${id}`;
    return this.http.get(url);
  }

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
    }
  }

  public saveIDLogin1(id: number){
    this.id_login1 = id;
  }

  public saveIDLogin2(id: number){
    this.id_login2 = id;
  }

  clearSesion(){
    this.tipo = null;
    this.id_usuario = null;
  }

  public updatePassword(login: Login){
    // let url = "http://localhost:300/password";
    let url = `https://adopt-me2021.herokuapp.com/password`;
    return this.http.put(url, login);
  }

  public eliminarAdoptante(id: number){
    let url = "http://localhost:300/adoptante";
    let data = {"id_Adoptante": id};
    let param = {
      headers: {"Content-type": "application/json; charset = UTF-8"},
      body : JSON.stringify(data),
      method: "DELETE"
    }
    return this.http.delete(url, param);
  }

  // isAuth(): boolean {
  //   const almacenamientoLocal = localStorage.getItem('token');
  //   return true;
  // }
}
