import { Component, OnInit } from '@angular/core';
import { SesionesService } from 'src/app/shared/sesiones.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  public mostrar: Boolean;
  public pregunta: string;

  constructor(public sesiones: SesionesService) { 
    this.mostrar=false;
  }
  public ver(respuesta:string){
    this.pregunta=respuesta;

      this.mostrar=!this.mostrar

    }

  ngOnInit(): void {
  }

}