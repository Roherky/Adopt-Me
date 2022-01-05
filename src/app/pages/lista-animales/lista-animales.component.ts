import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/shared/animal.service';
import { SesionesService } from 'src/app/shared/sesiones.service';


@Component({
  selector: 'app-lista-animales',
  templateUrl: './lista-animales.component.html',
  styleUrls: ['./lista-animales.component.css']
})
export class ListaAnimalesComponent implements OnInit {
  public animal: Animal;
  public animales: Animal[];

  constructor(private animalServicio: AnimalService,  public sesion: SesionesService) {
    this.animal=new Animal(null, "", "", "", "", "", "", "", "", this.sesion.id_usuario, "");
  }

  ngOnInit(): void {

    if(this.sesion.tipo=="protectora"){
      this.animalServicio.obtenerAnimalesProtectora(this.sesion.id_usuario)
      .subscribe((data:Animal[])=>{
        this.animales=data;
      })

    }else{
      this.animalServicio.obtenerAnimales()
      .subscribe((data:Animal[])=>{
        this.animales=data;
      })
    }
  }
  
mostrar(nombre:string, sexo:string, tipo_animal:string, fecha_ingresso:string){

if(this.sesion.tipo=="protectora"){
  this.animalServicio.obtenerAnimalProtectora(this.sesion.id_usuario, nombre, sexo, tipo_animal, fecha_ingresso)
  .subscribe((data:Animal[])=>{
    this.animales=data;
  })
}else{
  this.animalServicio.obtenerAnimal(nombre, sexo, tipo_animal, fecha_ingresso)
  .subscribe((data:Animal[])=>{
    this.animales=data;
  })
}
}

mostrarDetalle(idAnimal){

  this.animalServicio.obtenerIdAnimal(idAnimal);
}
}