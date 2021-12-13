import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/shared/animal.service';
import { SesionesService } from 'src/app/shared/sesiones.service';

@Component({
  selector: 'app-lista-animales-protectora',
  templateUrl: './lista-animales-protectora.component.html',
  styleUrls: ['./lista-animales-protectora.component.css']
})
export class ListaAnimalesProtectoraComponent implements OnInit {

  public animal: Animal;
  public animales: Animal[];

  constructor(private animalServicio: AnimalService, private sesion: SesionesService) { }

  ngOnInit(): void {
    this.animalServicio.obtenerAnimalesProtectora(this.sesion.id_usuario)
    .subscribe((data:Animal[])=>{
      this.animales=data;
      console.log(this.animales);
    })
  }

  mostrar(nombre:string, sexo:string, tipo_animal:string, fecha_ingresso:string){

    console.log(nombre);
    console.log(sexo);
    console.log(tipo_animal);
    console.log(fecha_ingresso);
  
    console.log(this.animales);
    this.animalServicio.obtenerAnimalProtectora(this.sesion.id_usuario, nombre, sexo, tipo_animal, fecha_ingresso)
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
