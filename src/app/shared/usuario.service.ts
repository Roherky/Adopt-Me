import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  public usuario: Usuario;

  public idUsuario:number;
 
  private url = "https://adopt-me2021.herokuapp.com/adoptante";
  private url2 = "http://localhost:300/adoptante";
  private urlgeneracion = "https://adopt-me2021.herokuapp.com/registro/adoptante";

  constructor(private http: HttpClient) { }

  obtenerIdUsuario(idUsuario:number){
 
    this.idUsuario=idUsuario
    return this.idUsuario;
   }
 
 
   obtenerId(idUsuario:number){
     let url= `https://adopt-me2021.herokuapp.com/adoptante?idUsuario=${idUsuario}`; 
   console.log(url);
   console.log(this.idUsuario);
     return this.http.get(url);
   }

  public getAdoptantes(){
    return this.http.get(this.url);
  }

  // public getAdoptante(id: any){
  //   return this.http.get(this.url + "/" + id);
  // }

  getAdoptante(nombre:string, apellidos:string, fechaNacimiento:string, telefono:number, email:string, localidad:string, direccion:string, descripcion:string, imagenPerfil:string){
    let url = `https://adopt-me2021.herokuapp.com/adoptante?nombre=${nombre}&apellidos=${apellidos}&fechaNacimiento=${fechaNacimiento}&telefono=${telefono}&email=${email}&localidad=${localidad}&direccion=${direccion}&descripcion=${descripcion}&imagenPerfil=${imagenPerfil}`;
    console.log(url);
    return this.http.get(url)
  }

  public postAdoptante(nuevoAdoptante: Usuario){
    return this.http.post(this.urlgeneracion, nuevoAdoptante, {responseType: "text"});
  }

  public putAdoptante(adoptanteActualizado: Usuario){
    return this.http.put(this.url2, adoptanteActualizado);
    console.log(adoptanteActualizado);
    
  }

  public deleteAdoptante(idUsuario: any){
    let data ={"id_Adoptante": idUsuario}
    console.log(idUsuario);
    let params = {
      headers: {"Content-type": "application/json; charset = UTF-8"},
      body: JSON.stringify(data),
      method: "DELETE"
    }
    return this.http.delete(this.url, params);
  }
}
