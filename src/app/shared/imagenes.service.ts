import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imagenes } from '../models/imagenes';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  private url = "https://adopt-me-angular.herokuapp.com/imagenes";

  public imagenes:Imagenes;

  constructor(private http: HttpClient) {  
  }


  obtenerImagenes(){
    return this.http.get(this.url)
  }

  obtenerImagen(id_animal:number){
    let url= "https://adopt-me-angular.herokuapp.com/imagenes?id_animal="+id_animal; 
    return this.http.get(url)
  }

  añadirImagen(nuevaImagen: Imagenes)
  {
    
    return this.http.post(this.url, nuevaImagen)
  }

  actualizarImagen(imagen:Imagenes){

    return this.http.put(this.url, imagen);
    }


  borrarImagen(id_imagenes:any)
  {
    let data ={"id_imagenes": id_imagenes}
    console.log(id_imagenes);
    let param={
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body : JSON.stringify(data),
      method: "DELETE"
 }

    return this.http.delete(this.url, param)
  }
}
