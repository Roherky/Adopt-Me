import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Protectora } from '../models/protectora';


@Injectable({
  providedIn: 'root'
})
export class ProtectoraService {

  public protectora: Protectora;
  private url = "http://localhost:300/protectora"

  constructor(private http: HttpClient) { }

  public getProtectora(id:any)
  {
    return this.http.get(this.url + "/" + id);
  }

  // public postProtectora(newProtectora: Protectora)
  // {
  //   return this.http.post(this.url, newProtectora);
  // }

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

}