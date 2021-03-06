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

  constructor(private animalServicio: AnimalService, private sesion: SesionesService) {
    
  }

  ngOnInit(): void {
    this.animalServicio.obtenerAnimalesProtectora(2)
    .subscribe((data:Animal[])=>{
      this.animales=data;
    })
  }

  mostrar(nombre:string, sexo:string, tipo_animal:string, fecha_ingresso:string){

    this.animalServicio.obtenerAnimalProtectora(2, nombre, sexo, tipo_animal, fecha_ingresso)
    .subscribe((data:Animal[])=>{
      this.animales=data;
    })


  }

  mostrarDetalle(idAnimal){
    this.animalServicio.obtenerIdAnimal(idAnimal);
   
  }

}
