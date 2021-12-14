import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/shared/animal.service';
import { SesionesService } from 'src/app/shared/sesiones.service';

@Component({
  selector: 'app-modificar-animal',
  templateUrl: './modificar-animal.component.html',
  styleUrls: ['./modificar-animal.component.css']
})
export class ModificarAnimalComponent implements OnInit {

  public animal: Animal;
  public id:number;

  constructor(private animalServicio: AnimalService, public sesion: SesionesService) {
   this.animal=new Animal(null,"", "", "", "","", "", "", "",  null, "");

  }

  ngOnInit(): void {
  }

 
  editarAnimal(nombre: string, raza: string, sexo: string, tamanyo:string, tipo_animal:string,  fecha_ingresso:string, estado:string, imagen:string, descripcion:string){
       this.id= this.animalServicio.idAnimal; 
    let animal=new Animal(this.id, nombre, raza, sexo, imagen, tipo_animal,  estado, fecha_ingresso, descripcion, this.sesion.id_usuario, tamanyo)
      for(let propiedad in animal){
            if(animal[propiedad]==""){
              animal[propiedad]=null
            }
        }   

       
        

    this.animalServicio.actualizarAnimal(animal)
    .subscribe((data:string) =>{
      console.log(data);
      if(data=="1"){

        alert("se ha modificado correctamente")
      }
      else{
        alert("No se puede modificar")
      
       }
 
      console.log(data);
    })
  }
}
