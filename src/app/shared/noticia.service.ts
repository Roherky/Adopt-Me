import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Noticia} from '../models/noticia';


@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  
  public idNoticia:number
  public noticia: Noticia
  // private url= "http://localhost:300/noticias"
  private url = "https://adopt-me2021.herokuapp.com/noticias"

  constructor(private http: HttpClient) { }

  public getNoticia(id_Protectora:any)
  {
    let url= `https://adopt-me2021.herokuapp.com/noticias?id_Protectora=${id_Protectora}`; 
    return this.http.get(url);
  }
  public getNoticias()
  {
    return this.http.get(this.url + "/" );
  }

  public postNoticia(newNoticia: Noticia)
  {
    return this.http.post(this.url, newNoticia);
  }

  public putNoticia(modNoticia: Noticia)
  {
    return this.http.put(this.url, modNoticia);
  }

  deleteNoticia(idNoticia:any)
  {
    let data ={"idNoticias": idNoticia}
    console.log(idNoticia);
    let param={
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body : JSON.stringify(data),
      method: "DELETE"
 }

    return this.http.delete(this.url, param)
  }

  obteneridNoticia(idNoticia:number){
 
    this.idNoticia=idNoticia
    return this.idNoticia;
   }
}