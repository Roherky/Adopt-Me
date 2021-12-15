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

  constructor(private apiService: UsuarioService, public sesiones: SesionesService, private imagenServicio: ImagenesService) {
    this.usuario = new Usuario(null,"", "", "", null, "", "", "", "", "", "")
  }

  ngOnInit(): void {
    //   this.apiService.getAdoptante(this.sesiones.id_usuario).subscribe((data: any) => {
    //   this.usuario = data;
    //   console.log(this.usuario);
    // })

    

    
    this.id= this.apiService.idUsuario;
    console.log(this.id);
    console.log(this.usuario);
    
    this.apiService.obtenerId(this.id)
    .subscribe((data:Usuario[])=>{
   
      this.usuario=data[0];
      console.log(this.usuario);
           
          })
  
  
   this.imagenServicio.getImagen(this.id)
   .subscribe((data:Imagenes[])=>{
     this.imagenes=data;
     console.log(this.imagenes);
   })
  
  }

  mostrarDetalle(idUsuario){

    this.apiService.obtenerIdUsuario(idUsuario);
    console.log(idUsuario)
    
    }



  public mostrarAdoptante(id: any){
    this.apiService.getAdoptante("", "", "", null, "", "", "", "", "")
    .subscribe((data: any) => {
      this.usuario = data;
      this.sesiones.id_usuario;
      console.log(this.usuario);
    })
  }

  public mostrarAdoptantes(){
    this.apiService.getAdoptantes().subscribe((data: any) => {
      this.usuario = data;
      console.log(this.usuario);
    })
  }

  public modificarAdoptante(id: any, nombre: string, apellidos: string, fechaNacimiento: string, 
                            telefono: number, email: string, password: string, localidad: string,
                            direccion: string, descripcion:string, imagenPerfil: string, ){
    this.apiService.putAdoptante(new Usuario(id, nombre, apellidos, fechaNacimiento, telefono, email,
                                             password, localidad, direccion, descripcion, imagenPerfil, ))
    .subscribe((data: any) => {
      console.log(data);
      if(data != "-1") console.log("Su solicitud se ha procesado con éxito");
      else ("Ha ocurrido un error al procesar su solicitud");
    })
  }

  


}




