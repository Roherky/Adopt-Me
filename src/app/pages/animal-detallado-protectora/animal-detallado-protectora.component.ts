import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/shared/animal.service';



@Component({
  selector: 'app-animal-detallado-protectora',
  templateUrl: './animal-detallado-protectora.component.html',
  styleUrls: ['./animal-detallado-protectora.component.css']
})
export class AnimalDetalladoProtectoraComponent implements OnInit {

  public animal:Animal
  public animales: Animal[];
  public id:number;

  constructor(private animalServicio: AnimalService) { 

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
  }
}

