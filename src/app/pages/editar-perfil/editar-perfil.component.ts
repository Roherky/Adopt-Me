import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { SesionesService } from 'src/app/shared/sesiones.service';
import { UsuarioService } from 'src/app/shared/usuario.service';


@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  public usuario: Usuario;
  public id:number;

  constructor(private apiService: UsuarioService,
              private sesiones: SesionesService,
              private router: Router) { }

  editarPerfil(nombre: string, apellidos: string, fechaNacimiento: string, telefono: any, localidad: string,  direccion: string, imagen: string, descripcion: string){
    this.id = this.apiService.id; 
    let user = new Usuario(this.sesiones.id_usuario, nombre, apellidos, fechaNacimiento, telefono, "", "", localidad, direccion, imagen, descripcion)
    for(let propiedad in user){

        if(user[propiedad] == ""){
          user[propiedad] = null
        }
        
    }   

    this.apiService.putAdoptante(user)
    .subscribe((data:string) =>{
      if(data !="-1"){

        // alert("Se han modificado sus datos correctamente");
        this.router.navigate(['perfilUsuario'])
      }
      else{
        alert("Ha ocurrido un error al procesar su solicitud")     
        }
    })
}

  ngOnInit(): void {
  }

  // eliminarPerfil(){
  //   this.sesiones.eliminarAdoptante(this.sesiones.id_usuario).subscribe((data: any) => {
  //     this.sesiones.clearSesion();
  //     alert("Se ha eliminado su cuenta correctamente");
  //     this.router.navigate(['inicio']);
  //   })
  // }
}