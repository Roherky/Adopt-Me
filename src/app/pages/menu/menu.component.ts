import { Component, OnInit } from '@angular/core';
import { SesionesService } from 'src/app/shared/sesiones.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public tipoUsuario: string;

  constructor(public sesiones: SesionesService) {
    sesiones.clearSesion();
  }

  ngOnInit(): void { }
}