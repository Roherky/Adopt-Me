import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { Imagenes } from 'src/app/models/imagenes';
import { ImagenesService } from 'src/app/shared/imagenes.service';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { SesionesService } from 'src/app/shared/sesiones.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  public usuario: Usuario;
  public id:number;
  // public adoptante: Usuario;
  // public adoptantes: Usuario[];
  public imagenes:Imagenes[];

  constructor(private apiService: UsuarioService, public sesion: SesionesService, private imagenServicio: ImagenesService) {
    this.usuario = new Usuario(null,"", "", "", null, "", "", "", "", "", "")

  }

  ngOnInit(): void {
    this.id= this.sesion.id_usuario;

    this.apiService.obtenerId(this.id)
    .subscribe((data: Usuario[]) => {
    this.usuario = data[0];
  
    })


  this.mostrarImagenes();


  }

  mostrarImagenes(){
    this.imagenServicio.obtenerImagenesAdoptante(this.id)
    .subscribe((data:Imagenes[])=>{
      this.imagenes=data;
    })
  }


  public modificarAdoptante(id:any, nombre: string, apellidos: string, fechaNacimiento: string, 
    telefono: number, email: string, password: string, localidad: string,
    direccion: string, descripcion:string, imagenPerfil: string, )
  {
    
    this.apiService.putAdoptante(new Usuario(this.sesion.id_usuario, nombre, apellidos, fechaNacimiento, telefono, email, password, localidad, direccion, descripcion, imagenPerfil))

    .subscribe((data:any) => 
    {
      if(data != "-1"){
        // alert("Se ha actualizado el usuario con id: " + data)
      }
      else
        alert("Error al actualizar la protectora");
    })
  }


  
agregarImagen(urlImagen:string){
 
  let imagen:Imagenes;
  imagen=new Imagenes(null, this.sesion.id_usuario, null, null, null, null, urlImagen);


  this.imagenServicio.añadirImagen(imagen)
  .subscribe((data:string)=>{

    if (data != "-1"){
      // alert("Se ha insertado la imagen con id: " + data)
    this.mostrarImagenes();

    }
    else
      alert("Error al insertar la imagen");

  })



}
}

