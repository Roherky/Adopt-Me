import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Imagenes } from 'src/app/models/imagenes';
import { ImagenesService } from 'src/app/shared/imagenes.service';

@Component({
  selector: 'app-formulario-imagenes',
  templateUrl: './formulario-imagenes.component.html',
  styleUrls: ['./formulario-imagenes.component.css']
})
export class FormularioImagenesComponent implements OnInit {
  
   public imagenes:Imagenes;
  constructor(private imagenesServicio: ImagenesService) {
  
    this.imagenes=new Imagenes(null, null, null, null, null, null, "");
   }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.imagenesServicio.añadirImagen(this.imagenes)
    .subscribe((data:string) =>
    {
    
      console.log(data);
      if (data != "-1")
        alert("Se ha insertado la imagen con id: " + data)
      else
        alert("Error al insertar la imagen");

    })
  }

}
