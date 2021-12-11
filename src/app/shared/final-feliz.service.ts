import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FinalFeliz } from '../models/final-feliz';

@Injectable({
  providedIn: 'root'
})
export class FinalFelizService {

  private url = "http://localhost:300/finalfeliz";

  constructor(private http: HttpClient) { }

  public getFinalesFelices(){
    return this.http.get(this.url);
  }

  public getFinalFeliz(id: any){
    return this.http.get(this.url + "/" + id);
  }

  public postFinalFeliz(nuevoFinalFeliz: FinalFeliz){
    return this.http.post(this.url, nuevoFinalFeliz);
  }
}
