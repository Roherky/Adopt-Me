import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Protectora } from '../models/protectora';


@Injectable({
  providedIn: 'root'
})
export class ProtectoraService {

  public protectora: Protectora;
  private url = "http://localhost:300/protectora"
  private registro = "http://localhost:300/registro/protectora";

  constructor(private http: HttpClient) { }

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
