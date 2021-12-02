import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-anyadir-animales',
  templateUrl: './anyadir-animales.component.html',
  styleUrls: ['./anyadir-animales.component.css']
})
export class AnyadirAnimalesComponent implements OnInit {

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
