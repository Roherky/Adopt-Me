import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  public tipoUsuario: string;

  constructor() {
    this.tipoUsuario = "protectora";
  }

  ngOnInit(): void {
  }

}
