import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Protectora } from 'src/app/models/protectora';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;
  public protectora: Protectora;

  constructor(public service: UsuarioService) {
    this.usuario = new Usuario(0, "", "", "", 0, "", "", "", "", "");
    this.protectora = new Protectora("", "", "", "", "", "", [], []);
  }

  onSubmit(form: NgForm){
    console.log(this.usuario);
  }

  public addAdoptante(nombre: string, apellidos: string, fechaNacimiento: string, 
    telefono: any, email: string, password: string, localidad: string,
    direccion: string, imagenPerfil: string){
    this.service.putAdoptante(new Usuario(0, nombre, apellidos, fechaNacimiento, telefono, email,
                     password, localidad, direccion, imagenPerfil))
    .subscribe((data: any) => {
    console.log(data);
    if(data != "-1") console.log("Su solicitud se ha procesado con éxito");
    else ("Ha ocurrido un error al procesar su solicitud");
    })
  }

  // public modificarAdoptante(id: any, nombre: string, apellidos: string, fechaNacimiento: string, 
  //   telefono: any, email: string, password: string, localidad: string,
  //   direccion: string, imagenPerfil: string){
  //   this.service.putAdoptante(new Usuario(id, nombre, apellidos, fechaNacimiento, telefono, email,
  //                    password, localidad, direccion, imagenPerfil))
  //   .subscribe((data: any) => {
  //   console.log(data);
  //   if(data != "-1") console.log("Su solicitud se ha procesado con éxito");
  //   else ("Ha ocurrido un error al procesar su solicitud");
  //   })
  // }

  public modificarAdoptante(id: any, nombre: string, apellidos: string, fechaNacimiento: string, 
    telefono: any, email: string, password: string, localidad: string,
    direccion: string, imagenPerfil: string){
    let adoptante = new Usuario(id, nombre, apellidos, fechaNacimiento, telefono, email, password,
                                localidad, direccion, imagenPerfil)
    for(let propiedad in adoptante){
      if(adoptante[propiedad] == ""){
        adoptante[propiedad] == null;
      }
    }
    this.service.putAdoptante(adoptante).subscribe((data: any) => {
      console.log(data);
      if(data != "-1") console.log("Su solicitud se ha procesado con éxito");
      else ("Ha ocurrido un error al procesar su solicitud");
    })
  }

  ngOnInit(): void {
  }

}