import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  public usuario: Usuario;

  public id:number;
 
  private url = "https://adopt-me2021.herokuapp.com/adoptante";
  private url2 = "http://localhost:300/adoptante";
  private urlgeneracion = "https://adopt-me2021.herokuapp.com/registro/adoptante";

  constructor(private http: HttpClient) { }

  obtenerIdUsuario(id:number){
 
    this.id=id
    return this.id;
   }
 
 
   obtenerId(id:number){
     let url= `https://adopt-me2021.herokuapp.com/adoptante?id=${id}`; 
   console.log(url);
   console.log(this.id);
     return this.http.get(url);
   }

  public getAdoptante(id:any){
    return this.http.get(this.url + "/" + id);
  }

  getAdoptantes(nombre:string, apellidos:string, fechaNacimiento:string, telefono:number, email:string, localidad:string, direccion:string, descripcion:string, imagenPerfil:string){
    let url = `https://adopt-me2021.herokuapp.com/adoptante?nombre=${nombre}&apellidos=${apellidos}&fechaNacimiento=${fechaNacimiento}&telefono=${telefono}&email=${email}&localidad=${localidad}&direccion=${direccion}&descripcion=${descripcion}&imagenPerfil=${imagenPerfil}`;
    console.log(url);
    return this.http.get(url)
  }

  public postAdoptante(nuevoAdoptante: Usuario){
    return this.http.post(this.urlgeneracion, nuevoAdoptante, {responseType: "text"});
  }

  public putAdoptante(adoptanteActualizado: Usuario){
    return this.http.put(this.url2, adoptanteActualizado);
  }

  public deleteAdoptante(id: any){
    let data ={"id_Adoptante": id}
    console.log(id);
    let params = {
      headers: {"Content-type": "application/json; charset = UTF-8"},
      body: JSON.stringify(data),
      method: "DELETE"
    }
    return this.http.delete(this.url, params);
  }
}
