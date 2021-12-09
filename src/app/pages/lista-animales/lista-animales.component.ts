import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/shared/animal.service';

@Component({
  selector: 'app-lista-animales',
  templateUrl: './lista-animales.component.html',
  styleUrls: ['./lista-animales.component.css']
})
export class ListaAnimalesComponent implements OnInit {
  public animal: Animal;
  public animales: Animal[];

  constructor(private animalServicio: AnimalService) { 
   
  }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    console.log(this.animal);
  }


  mostrar(nombre:string){

    // for(let i=0;i<this.animal.length;i++){

    // }

    if(nombre!=''){
      this.animalServicio.obtenerAnimal(nombre).subscribe((data:Animal[]) => 
      {    
        console.log(data)
        this.animal.nombre = data[0].nombre;
      }   
      )
    // }else{
    
    //   this.animalServicio.obtenerDiscos().subscribe((data:Disco[])=> { 

    //     this.discos=data;
    //    console.log(data)
     
    //   this.arrayDiscosLongitud=this.discos.length;
      

    
    //   })
       
      
   }  
  }
}
