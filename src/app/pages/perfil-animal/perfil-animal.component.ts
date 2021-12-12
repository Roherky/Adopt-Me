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

    //this.animal=new Animal(null,"Niebla", "Siberiano", "Macho", "gato.jpg", "gato", "adoptado" , "2021/12/12", "Esta pequeña de mes y medio fue encontrada en mitad de una carretera junto con sus hermanos. Hubo una persona que no quiso mirar hacia otro lado y contactó rápidamente con nosotros para recoger a aquellos tres pequeños tirados sin ninguna sensibilidad.  No sabemos nada de sus historias pero suponemos que un abandono así siendo cachorros, sólo mostraban miedo...", null, "pequeño");
  }

  ngOnInit(): void {

    //this.animal=new Animal(null, "jj", "sssssss", "", "", "", "", "", "", null, "");
   this.id= this.animalServicio.idAnimal;
   console.log(this.id);
   console.log("funcionaaaaaaa")

  
   console.log("ejemmmplo")
   console.log(this.animal);
   
   this.animalServicio.obtenerId(this.id)
   .subscribe((data:Animal[])=>{
    console.log("aqqqqqqqqqqqqqqqqqquiiiiiiiiii")
           this.animal=data[0];
           console.log("aqqqqqqqqqqqqqqqqqquiiiiiiiiii")
           console.log(this.animal);
           console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
         })
  }

}
