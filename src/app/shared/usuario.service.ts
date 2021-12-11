import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = "http://localhost:300/adoptante";

  constructor(private http: HttpClient) { }

  public getAdoptantes(){
    return this.http.get(this.url);
  }

  public getAdoptante(id: any){
    return this.http.get(this.url + "/" + id);
  }

  public postAdoptante(nuevoAdoptante: Usuario){
    return this.http.post(this.url, nuevoAdoptante, {responseType: "text"});
  }

  public putAdoptante(adoptanteActualizado: Usuario){
    return this.http.put(this.url, adoptanteActualizado);
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
