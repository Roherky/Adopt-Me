import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public usuario!:Usuario
  constructor() { 
    this.usuario = new Usuario(0, "", "", "", 0, "", "", "", "", "", "");
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(this.usuario);
  }

}
