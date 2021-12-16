import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { SesionesService } from 'src/app/shared/sesiones.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public usuario!:Usuario
  constructor(public sesiones: SesionesService) { 
    this.usuario = new Usuario(0, "", "", "", 0, "", "", "", "", "", "");
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(this.usuario);
  }

}
