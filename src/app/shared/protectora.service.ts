import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Protectora } from '../models/protectora';
 

@Injectable({
  providedIn: 'root'
})
export class ProtectoraService {

  public protectora: Protectora;
  public idProtectora:number;

  private url = "https://adopt-me2021.herokuapp.com/protectora";
  // private registro = "https://adopt-me2021.herokuapp.com/registro/protectora";
  private registro = "https://adopt-me2021.herokuapp.com/registro/protectora";


  constructor(private http: HttpClient) { }

  obtenerIdProtectora(idProtectora:number){
 
    this.idProtectora=idProtectora
    return this.idProtectora;
   }
 
 
   obtenerId(idProtectora:number){
     let url= `https://adopt-me2021.herokuapp.com/protectora?idProtectora=${idProtectora}`; 
   console.log(url);
   console.log(this.idProtectora);
     return this.http.get(url);
   }

   getProtectoras(nombre: string, direccion: string, localidad: string, telefono:any, imagen:string, descripcion:string){
    let url = `https://adopt-me2021.herokuapp.com/protectora?nombre=${nombre}&direccion=${direccion}&localidad=${localidad}&telefono=${telefono}&imagen=${imagen}&descripcion=${descripcion}`;
    console.log(url);
    return this.http.get(url)
  }
  
  public getProtectora(id:any)
  {
    return this.http.get(this.url + "/" + id);
  }

  public postProtectora(newProtectora: Protectora)
  {
    return this.http.post(this.registro, newProtectora);
  }

  public putProtectora(modProtectora: Protectora)
  {
    return this.http.put(this.url, modProtectora);
  }

  // public deleteProtectora(id:any)
  // {
  //   console.log(id);
  //   const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: id}
  //   return this.http.delete(this.url, httpOptions);
  // }
  public deleteProtectora(id: any){
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
