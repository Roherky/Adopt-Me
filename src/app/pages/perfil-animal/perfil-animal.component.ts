import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/shared/animal.service';
@Component({
  selector: 'app-perfil-animal',
  templateUrl: './perfil-animal.component.html',
  styleUrls: ['./perfil-animal.component.css']
})
export class PerfilAnimalComponent implements OnInit {

  public animal:Animal
  public id:number;


  constructor(private animalServicio: AnimalService) { 

   
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
  }

}
