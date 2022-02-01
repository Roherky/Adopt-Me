import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Animal } from 'src/app/models/animal';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/shared/animal.service';
import { SesionesService } from 'src/app/shared/sesiones.service';

@Component({
  selector: 'app-anyadir-animales',
  templateUrl: './anyadir-animales.component.html',
  styleUrls: ['./anyadir-animales.component.css']
})
export class AnyadirAnimalesComponent implements OnInit {

  public animal: Animal;

  constructor(private animalServicio: AnimalService, public sesion: SesionesService, private router:Router,) {
    this.animal=new Animal(null,"", "", "", "","", "", "", "",  null, "");
   
  }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm){
    this.animal.id_protectora=this.sesion.id_usuario;
    this.animalServicio.añadirAnimal(this.animal)
    .subscribe((data:string) =>
    {
    
      if (data != "-1"){
        // alert("Se ha insertado el animal con id: " + data)
        this.router.navigate(['/listadoAnimales'])
      }
      else
        alert("Error al insertar el animal");

    })
  }
}
