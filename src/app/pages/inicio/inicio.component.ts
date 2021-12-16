import { Component, OnInit } from '@angular/core';
import { SesionesService } from 'src/app/shared/sesiones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  constructor(public sesiones: SesionesService) { }

  ngOnInit(): void {
    console.log(this.sesiones.tipo)
  }

}
