import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  

  constructor( private apiService: UsuarioService, private sesiones:SesionesService) {
    this.usuario=new Usuario(null,"","","",null,"","","","","","")
    
  }
  onSubmit(form: NgForm){
    
    this.apiService.putAdoptante(this.usuario)
    .subscribe((data:string) =>
    {
    
      console.log(data);
      if (data != "-1")
        alert("Se modificado el usuario" + data)
      else
        alert("Error al modificar el usuario");

    })

  }imagenPerfil:string;
  editarPerfil(nombre: string, apellidos: string, fechaNacimiento: string, telefono:number, email:string,  password:string, localidad:string,  descripcion:string, direccion:string, imagenPerfil:string){
    this.id= this.apiService.id; 
 let usuario=new Usuario(this.id, nombre, apellidos, fechaNacimiento, telefono, email,  password, localidad, direccion, descripcion, imagenPerfil)
   for(let propiedad in usuario){
         if(usuario[propiedad]==""){
           usuario[propiedad]=null
         }
     }   

    

//  this.apiService.getAdoptante(usuario)
//  .subscribe((data:string) =>{
//    console.log(data);
//    if(data=="1"){

//      alert("se ha modificado correctamente")
//    }
//    else{
//      alert("No se puede modificar")
   
//     }

//    console.log(data);
//  })
 }
    
 

  ngOnInit(): void {
  }

}

