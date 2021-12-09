import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/shared/animal.service';

@Component({
  selector: 'app-anyadir-animales',
  templateUrl: './anyadir-animales.component.html',
  styleUrls: ['./anyadir-animales.component.css']
})
export class AnyadirAnimalesComponent implements OnInit {

  public animal: Animal;

  constructor(private animalServicio: AnimalService) {
    this.animal=new Animal(null,"", "", "", "","", "", "", "",  null, "");
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.animalServicio.añadirAnimal(this.animal)
    .subscribe((data:string) =>
    {
    
      console.log(data);
      if (data != "-1")
        alert("Se ha insertado el animal con id: " + data)
      else
        alert("Error al insertar el animal");

    })
  }
}
