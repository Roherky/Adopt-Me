import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private url = "http://localhost:3000/animal";

  public animal: Animal;

  constructor(private http: HttpClient) { }

  obtenerAnimales(){
    return this.http.get(this.url)
  }


  obtenerAnimal(nom:string){
    let url= "http://localhost:3000/animal?nombre=" +nom; 
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
