import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  public usuario: Usuario;
  public adoptante: Usuario;
  public adoptantes: Usuario[];

  constructor(private apiService: UsuarioService) {
    this.usuario = new Usuario(0, "Nuria", "Fernández", "21 - Julio - 1990", 600000000 , "nuri@gmail.com", "", "Getafe","", "","")
  }

  public mostrarAdoptante(id: any){
    this.apiService.getAdoptante(id).subscribe((data: any) => {
      this.adoptante = data;
      console.log(this.adoptante);
    })
  }

  public mostrarAdoptantes(){
    this.apiService.getAdoptantes().subscribe((data: any) => {
      this.adoptantes = data;
      console.log(this.adoptantes);
    })
  }

  public modificarAdoptante(id: any, nombre: string, apellidos: string, fechaNacimiento: string, 
                            telefono: number, email: string, password: string, localidad: string,
                            direccion: string, descripcion:string, imagenPerfil: string){
    this.apiService.putAdoptante(new Usuario(id, nombre, apellidos, fechaNacimiento, telefono, email,
                                             password, localidad, direccion, descripcion, imagenPerfil))
    .subscribe((data: any) => {
      console.log(data);
      if(data != "-1") console.log("Su solicitud se ha procesado con éxito");
      else ("Ha ocurrido un error al procesar su solicitud");
    })
  }

  ngOnInit(): void {
  }


}




