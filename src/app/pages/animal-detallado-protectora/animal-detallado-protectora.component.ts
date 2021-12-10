import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';


@Component({
  selector: 'app-animal-detallado-protectora',
  templateUrl: './animal-detallado-protectora.component.html',
  styleUrls: ['./animal-detallado-protectora.component.css']
})
export class AnimalDetalladoProtectoraComponent implements OnInit {

  public animal:Animal


  constructor() { 

    this.animal=new Animal(null, "King", "Labrador", "Macho", "imagen.jpg", "Perro", "adoptado", "2020/12/12", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", null, "grande");
  }

  ngOnInit(): void {
  }


}

