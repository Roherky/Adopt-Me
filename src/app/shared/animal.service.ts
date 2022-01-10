import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';

 
@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private url ="https://adopt-me2021.herokuapp.com/animal"
  // private url = "http://localhost:300/animal";

  public animal: Animal;

  public idAnimal:number;

  constructor(private http: HttpClient) { }

  obtenerAnimales(){
    return this.http.get(this.url)
  }


  obtenerAnimal(nombre:string,sexo:string,tipoAnimal:string,fechaIngreso:string){
    let url= `https://adopt-me2021.herokuapp.com/animal?nombreAnimal=${nombre}&sexo=${sexo}&tipoAnimal=${tipoAnimal}&ingreso=${fechaIngreso}`; 
    // let url= `http://localhost:300/animal?nombreAnimal=${nombre}&sexo=${sexo}&tipoAnimal=${tipoAnimal}&ingreso=${fechaIngreso}`; 
    console.log(url);
    return this.http.get(url)
  }


  obtenerAnimalProtectora(idProtectora:number, nombre:string,sexo:string,tipoAnimal:string,fechaIngreso:string){
    let url= `https://adopt-me2021.herokuapp.com/animal?idProtec=${idProtectora}&nombreAnimal=${nombre}&sexo=${sexo}&tipoAnimal=${tipoAnimal}&ingreso=${fechaIngreso}`; 

    // let url= `http://localhost:300/animal?idProtec=${idProtectora}&nombreAnimal=${nombre}&sexo=${sexo}&tipoAnimal=${tipoAnimal}&ingreso=${fechaIngreso}`; 
    console.log(url);
    return this.http.get(url)
  }

  obtenerAnimalesProtectora(idProtectora:number){
    let url= `https://adopt-me2021.herokuapp.com/animal?idProtec=${idProtectora}`; 
    // let url= `http://localhost:300/animal?idProtec=${idProtectora}`; 
    return this.http.get(url)
  }


  obtenerIdAnimal(idAnimal:number){
 
   this.idAnimal=idAnimal
   return this.idAnimal;
  }

 

  obtenerId(idAnimal:number){
    //let url= `https://adopt-me2021.herokuapp.com/animal?idAnimal=${idAnimal}`; 
   let url= `https://adopt-me2021.herokuapp.com?idAnimal=${idAnimal}`; 
    return this.http.get(url);
  }

  obtenerIdAnimalProtec(idAnimal:number, idProtectora:number){
  
   let url= `https://adopt-me2021.herokuapp.com/animal?idAnimal=${idAnimal}&idProtec=${idProtectora}`; 
  // let url= `http://localhost:300/animal?idAnimal=${idAnimal}&idProtec=${idProtectora}`; 
    return this.http.get(url);
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