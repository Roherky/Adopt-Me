import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { Imagenes } from 'src/app/models/imagenes';
import { AnimalService } from 'src/app/shared/animal.service';
import { ImagenesService } from 'src/app/shared/imagenes.service';
import { Router } from '@angular/router';
import { SesionesService } from 'src/app/shared/sesiones.service';



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
  public imagen:Imagenes;
  public btnPulsado:boolean;

  constructor(private animalServicio: AnimalService,
              private imagenServicio: ImagenesService,
              private router:Router,
              public sesion: SesionesService) { 

    this.animal=new Animal(null, "", "", "", "", "", "", "", "", null, "");
  }


  eliminar(idAnimal){
  
    if(idAnimal!=""){

      this.animalServicio.borrarAnimal(idAnimal)
      .subscribe((data:string) =>{
       
        if (data == "1"){

          alert("Animal eliminado");
         this.router.navigate(['/listadoAnimales'])
         
          }else
          alert("Error al eliminar el animal");
       
        })
    }



  }

  // anyadirAnimal(){
  //   this.btnPulsado=true;
  // }

  agregarImagen(urlImagen:string){
   
    let imagen:Imagenes;
    imagen=new Imagenes(null, null, this.sesion.id_usuario, this.animal.idAnimal, null, null, urlImagen);

    this.imagenServicio.añadirImagen(imagen)
    .subscribe((data:string)=>{

      if (data != "-1"){
        // alert("Se ha insertado la imagen con id: " + data)
      this.mostrarImagenes();
      }
      else
        alert("Error al insertar la imagen");

    })

  
  }

  mostrarImagenes(){
    this.imagenServicio.obtenerImagen(this.id)
    .subscribe((data:Imagenes[])=>{
      this.imagenes=data;
  
    })
  }


  ngOnInit(): void {
   

   this.id= this.animalServicio.idAnimal;
   
   this.animalServicio.obtenerIdAnimalProtec(this.id, this.sesion.id_usuario)
   .subscribe((data:Animal[])=>{
   
           this.animal=data[0];

       
         })

this.mostrarImagenes();
        
  }
}

