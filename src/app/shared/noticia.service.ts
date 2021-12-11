import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Noticia} from '../models/noticia';


@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  public noticia: Noticia
  private url = "http://localhost:300/noticias"

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

  public deleteNoticia(id:any)
  {
    console.log(id);
    const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: id}
    return this.http.delete(this.url, httpOptions);
  }

}