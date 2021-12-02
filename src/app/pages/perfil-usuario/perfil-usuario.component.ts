import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  public user: Usuario
  constructor() {
    this.user = new Usuario("", "", "", "", "", 0, "", "", "", "","")
   }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    console.log(this.user);
    
  }

}
