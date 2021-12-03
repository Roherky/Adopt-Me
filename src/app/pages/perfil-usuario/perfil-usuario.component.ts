import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  public usuario: Usuario
  constructor() {
    this.usuario = new Usuario("Nuria", "Fernández", "21 - Julio - 1990", 600000000 , "nuri@gmail.com", "", "Getafe","", "")
   }

  ngOnInit(): void {
  }


}




