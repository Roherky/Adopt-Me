import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/shared/animal.service';

@Component({
  selector: 'app-lista-animales-protectora',
  templateUrl: './lista-animales-protectora.component.html',
  styleUrls: ['./lista-animales-protectora.component.css']
})
export class ListaAnimalesProtectoraComponent implements OnInit {

  public animal: Animal;
  public animales: Animal[];

  constructor(private animalServicio: AnimalService) { }

  ngOnInit(): void {
    this.animalServicio.obtenerAnimalesProtectora(2)
    .subscribe((data:Animal[])=>{
      this.animales=data;
      console.log(this.animales);
    })
  }

  mostrar(id_protectora:any, nombre:string, sexo:string, tipo_animal:string, fecha_ingresso:string){

    console.log(nombre);
    console.log(sexo);
    console.log(tipo_animal);
    console.log(fecha_ingresso);
  
    console.log(this.animales);
    this.animalServicio.obtenerAnimalProtectora(id_protectora, nombre, sexo, tipo_animal, fecha_ingresso)
    .subscribe((data:Animal[])=>{
      this.animales=data;
      console.log(this.animales);
    })
    
 
  }

  mostrarDetalle(idAnimal){

    console.log("id del animallllllllllllllll");
    console.log(idAnimal)
    console.log("id del animal");
    this.animalServicio.obtenerIdAnimal(idAnimal);
    console.log("id del animal otttttttttttttttttttttt");
    console.log(idAnimal)
  }

}
