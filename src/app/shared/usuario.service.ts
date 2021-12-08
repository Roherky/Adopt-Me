import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = "http://localhost:3000/adoptante";

  constructor(private http: HttpClient) { }

  public getAdoptantes(){
    return this.http.get(this.url);
  }

  public getAdoptante(id: any){
    return this.http.get(this.url + "/" + id);
  }

  public postAdoptante(nuevoAdoptante: Usuario){
    return this.http.post(this.url, nuevoAdoptante);
  }

  public putAdoptante(adoptanteActualizado: Usuario){
    return this.http.put(this.url, adoptanteActualizado);
  }

  public deleteAdoptante(id: any){
    console.log(id);
    const httpOptions = {headers: {'Content-Type': 'application/json'}, body: id};
    return this.http.delete(this.url, httpOptions);
  }
}
