import { Component, OnInit } from '@angular/core';
import { FinalFeliz } from 'src/app/models/final-feliz';
import { FinalFelizService } from 'src/app/shared/final-feliz.service';

@Component({
  selector: 'app-formulario-finales-felices',
  templateUrl: './formulario-finales-felices.component.html',
  styleUrls: ['./formulario-finales-felices.component.css']
})
export class FormularioFinalesFelicesComponent implements OnInit {

  public finalFeliz: FinalFeliz;

  constructor(private apiService: FinalFelizService) {
    this.finalFeliz = new FinalFeliz(0, "", "", "", "", 0);
  }

  public insertarFinalFeliz(nombreAnimal: string, fechaPublicacion: string, descripcion: string, imagenes: string){
    this.apiService.postFinalFeliz(new FinalFeliz(0, nombreAnimal, fechaPublicacion, descripcion, imagenes, 0))
    .subscribe((data: any) => {
      console.log(data);
      if(data != "-1") console.log("Se ha añadido el final feliz correctamente");
      else console.log("Error al procesar su solicitud");
    })
  }

  ngOnInit(): void {
  }

}
