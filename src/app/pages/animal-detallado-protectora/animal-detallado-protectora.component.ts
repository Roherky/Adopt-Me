import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { Imagenes } from 'src/app/models/imagenes';
import { AnimalService } from 'src/app/shared/animal.service';
import { ImagenesService } from 'src/app/shared/imagenes.service';



@Component({
  selector: 'app-animal-detallado-protectora',
  templateUrl: './animal-detallado-protectora.component.html',
  styleUrls: ['./animal-detallado-protectora.component.css']
})
export class AnimalDetalladoProtectoraComponent implements OnInit {

  public animal:Animal
  public animales: Animal[];
  public id:number;
  public imagenes:Imagenes[];

  constructor(private animalServicio: AnimalService, private imagenServicio: ImagenesService) { 

    this.animal=new Animal(null, "", "", "", "", "", "", "", "", null, "");
  }


  eliminar(idAnimal){
  
    console.log(idAnimal);
    if(idAnimal!=""){

      this.animalServicio.borrarAnimal(idAnimal)
      .subscribe((data:string) =>{
        console.log(data);
       
     
        if (data == "1"){

          alert("Animal eliminado");
         
          }else
          alert("Error al eliminar el animal");
       
        })
    }



  }

  ngOnInit(): void {
   

   this.id= this.animalServicio.idAnimal;
   console.log(this.id);
  
   console.log(this.animal);
   
   this.animalServicio.obtenerId(this.id)
   .subscribe((data:Animal[])=>{
   
           this.animal=data[0];
       
         })


         this.imagenServicio.obtenerImagen(this.id)
         .subscribe((data:Imagenes[])=>{
           this.imagenes=data;
           console.log(this.imagenes);
       
         })
  }
}

