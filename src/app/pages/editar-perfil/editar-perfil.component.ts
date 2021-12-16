import { Component, OnInit } from '@angular/core';
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
              private sesiones: SesionesService) {
    this.usuario=new Usuario(null,"","","",null,"","","","","","")
    console.log(this.sesiones.id_usuario)
  }

  editarPerfil(nombre: string, apellidos: string, fechaNacimiento: string, telefono:any, localidad:string,  direccion:string, imagen:string, descripcion:string){
    this.id= this.apiService.id; 
    let user = new Usuario(this.sesiones.id_usuario, nombre, apellidos, fechaNacimiento, telefono, "", "",localidad,  direccion, imagen, descripcion)
    for(let propiedad in user){

        if(user[propiedad]==""){
          user[propiedad]=null
        }
    }   

    this.apiService.putAdoptante(user)
    .subscribe((data:string) =>{
      console.log(data);
      console.log(user)
      if(data !="-1"){

        alert("Se ha modificado correctamente");
        console.log(data);
      }
      else{
        alert("No se puede modificar")
      
        }
      console.log(data);
    })
}
  ngOnInit(): void {
  }
}