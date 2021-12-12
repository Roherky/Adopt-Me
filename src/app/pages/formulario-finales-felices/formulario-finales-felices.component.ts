import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FinalFeliz } from 'src/app/models/final-feliz';
import { FinalFelizService } from 'src/app/shared/final-feliz.service';

@Component({
  selector: 'app-formulario-finales-felices',
  templateUrl: './formulario-finales-felices.component.html',
  styleUrls: ['./formulario-finales-felices.component.css']
})
export class FormularioFinalesFelicesComponent implements OnInit {

  public finalFeliz: FinalFeliz;

  constructor(private finalService: FinalFelizService) {
    this.finalFeliz = new FinalFeliz(0, "", "", "", "", 0);
  }

  onSubmit(form: NgForm){
    console.log(form);
    this.finalService.postFinalFeliz(this.finalFeliz)
    .subscribe((data: any) => {
      console.log(data);
      if(data != "-1") console.log("Se ha añadido el final feliz correctamente");
      else console.log("Error al procesar su solicitud");
    })
  }

  ngOnInit(): void {
  }

}
