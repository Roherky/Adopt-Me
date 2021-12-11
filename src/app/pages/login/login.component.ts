import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Protectora } from 'src/app/models/protectora';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;
  public protectora: Protectora;

  constructor() {
    this.usuario = new Usuario(0, "", "", "", 0, "", "", "", "", "","");
    this.protectora = new Protectora(0,"", "", "", "", "", "","","");
  }

  onSubmit(form: NgForm){
    console.log(this.usuario);
  }

  ngOnInit(): void {
  }

}