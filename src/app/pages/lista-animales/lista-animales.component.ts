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
    this.animalServicio.obtenerAnimales()
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
  this.animalServicio.obtenerAnimal(nombre, sexo, tipo_animal, fecha_ingresso)
  .subscribe((data:Animal[])=>{
    this.animales=data;
    console.log(this.animales);
  })
  
  // this.animalServicio.obtenerAnimales()
  // .subscribe((data:Animal[])=>{

  //   if(data.length>0){
  //     console.log(data);
     
  //     this.animales=data;
  //     console.log(this.animales);
     
  //   }
  // })
}

  
}
