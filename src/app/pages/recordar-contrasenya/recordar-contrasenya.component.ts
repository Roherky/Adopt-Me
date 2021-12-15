import { Component, OnInit } from '@angular/core';
import { SesionesService } from 'src/app/shared/sesiones.service';

@Component({
  selector: 'app-recordar-contrasenya',
  templateUrl: './recordar-contrasenya.component.html',
  styleUrls: ['./recordar-contrasenya.component.css']
})
export class RecordarContrasenyaComponent implements OnInit {

  constructor(public sesiones: SesionesService) { }

  ngOnInit(): void {
  }

}
