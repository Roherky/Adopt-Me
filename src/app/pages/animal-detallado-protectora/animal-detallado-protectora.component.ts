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
  public btnPulsado:boolean;

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

  anyadirAnimal(){
    this.btnPulsado=true;
  }

  agregarImagen(urlImagen:string){
   
    let imagen:Imagenes;
    imagen=new Imagenes(null, null, null, this.animal.idAnimal, null, null, urlImagen);
    
    this.imagenServicio.añadirImagen(imagen)
    .subscribe((data:string)=>{

      console.log(data);
      if (data != "-1")
        alert("Se ha insertado la imagen con id: " + data)
      else
        alert("Error al insertar la imagen");

    })

  
  
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

