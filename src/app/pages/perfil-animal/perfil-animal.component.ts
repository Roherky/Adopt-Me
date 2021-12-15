import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { Imagenes } from 'src/app/models/imagenes';
import { AnimalService } from 'src/app/shared/animal.service';
import { ImagenesService } from 'src/app/shared/imagenes.service';
import { SesionesService } from 'src/app/shared/sesiones.service';
@Component({
  selector: 'app-perfil-animal',
  templateUrl: './perfil-animal.component.html',
  styleUrls: ['./perfil-animal.component.css']
})
export class PerfilAnimalComponent implements OnInit {

  public animal:Animal
  public id:number;
  public imagenes:Imagenes[];
  

  constructor(private animalServicio: AnimalService, private sesiones: SesionesService, private imagenServicio: ImagenesService) { 

   this.animal=new Animal(null, "", "", "", "", "", "", "", "", null, "");
  }

  ngOnInit(): void {

   
   this.id= this.animalServicio.idAnimal;
   console.log(this.id);
 
   console.log(this.animal);
   
   this.animalServicio.obtenerId(this.id)
   .subscribe((data:Animal[])=>{
  
           this.animal=data[0];
        
           console.log(this.animal);
          
         })


  this.imagenServicio.obtenerImagen(this.id)
  .subscribe((data:Imagenes[])=>{
    this.imagenes=data;
    console.log(this.imagenes);
   

  })
  }



}
