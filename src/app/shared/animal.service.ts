import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private url = "http://localhost:300/animal";

  public animal: Animal;

  constructor(private http: HttpClient) { }

  obtenerAnimales(){
    return this.http.get(this.url)
  }


  obtenerAnimal(nombre:string,sexo:string,tipoAnimal:string,fechaIngreso:string){
    let url= `http://localhost:300/animal?nombreAnimal=${nombre}&sexo=${sexo}&tipoAnimal=${tipoAnimal}&ingreso=${fechaIngreso}`; 
    console.log(url);
    return this.http.get(url)
  }

  
  añadirAnimal(nuevoAnimal: Animal)
  {
    
    return this.http.post(this.url, nuevoAnimal)
  }

  actualizarAnimal(animal:Animal){

    return this.http.put(this.url, animal);
    }


  borrarAnimal(idAnimal:any)
  {
    let data ={"idAnimal": idAnimal}
    console.log(idAnimal);
    let param={
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body : JSON.stringify(data),
      method: "DELETE"
 }

    return this.http.delete(this.url, param)
  }
}
