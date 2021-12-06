import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-modificar-animal',
  templateUrl: './modificar-animal.component.html',
  styleUrls: ['./modificar-animal.component.css']
})
export class ModificarAnimalComponent implements OnInit {

  public animal: Animal;

  constructor() {
    this.animal=new Animal("", "", true, "", "", "", 0 , "", true, true, true, "", 0, "", 0);
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(this.animal);
  }
}
