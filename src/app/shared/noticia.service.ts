import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Noticia} from '../models/noticia';


@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  

  public idNoticia:number
  public noticia: Noticia
  private url2= "http://localhost:300/noticias"
  private url = "https://adopt-me2021.herokuapp.com/noticias"

  constructor(private http: HttpClient) { }

  public getNoticia(id:any)
  {
    return this.http.get(this.url + "/" + id);
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
    let data ={"idNoticia": idNoticia}
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