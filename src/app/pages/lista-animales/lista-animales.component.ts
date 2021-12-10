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
    this.animal=new Animal(null,"", "", "", "","", "", "", "",  null, "");
  }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    console.log(this.animal);
  }
mostrar(nombre){
  console.log(this.animales)
}
  
}
