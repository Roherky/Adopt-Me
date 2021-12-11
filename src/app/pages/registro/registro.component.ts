import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Protectora } from 'src/app/models/protectora';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  public esProtectora: boolean;
  public usuario: Usuario;
  public protectora: Protectora;

  constructor() {

    this.esProtectora = false;
    this.usuario = new Usuario(0, "", "", "", 0, "", "", "", "", "","");
    this.protectora = new Protectora(0,"", "", "", "", "", "","","");
  }

  usuarioAdoptante(){
    this.esProtectora = false;
  }

  usuarioProtectora(){
    this.esProtectora = true;
  }

  onSubmit(form: NgForm){
    console.log(this.usuario);
  }

  ngOnInit(): void {
  }

}
