import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FinalFeliz } from 'src/app/models/final-feliz';
import { FinalFelizService } from 'src/app/shared/final-feliz.service';
import { SesionesService } from 'src/app/shared/sesiones.service';

@Component({
  selector: 'app-formulario-finales-felices',
  templateUrl: './formulario-finales-felices.component.html',
  styleUrls: ['./formulario-finales-felices.component.css']
})
export class FormularioFinalesFelicesComponent implements OnInit {

  public finalFeliz: FinalFeliz;
  public mostrarDiv: boolean;

  constructor(private finalService: FinalFelizService, public sesiones: SesionesService, private router:Router) {
    this.finalFeliz = new FinalFeliz(0, "", "", "", "", 0);
    this.mostrarDiv = true;
  }

  onSubmit(form: NgForm){
    this.finalFeliz.id_adoptante = this.sesiones.id_usuario;
    this.finalService.postFinalFeliz(this.finalFeliz)
    .subscribe((data: any) => {
     
      if(data != "-1") 
      // alert("Se ha añadido el final feliz correctamente");
      this.router.navigate(['/finalesFelices'])
      else alert("Error al procesar su solicitud");
    })
  }

  ngOnInit(): void {
  }

}
