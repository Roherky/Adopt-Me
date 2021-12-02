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

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  public usuario!: Usuario;
  public esProtectora: boolean;
  public protectora: Protectora;

  constructor() {
    this.usuario = new Usuario("", "", "", "", "", 0, "", "", "", "", "");
    this.protectora = new Protectora("", "", "", "", "", "", [], []);
    this.esProtectora = false;
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