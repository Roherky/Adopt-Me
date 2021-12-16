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
  
  constructor( private apiService: UsuarioService, private sesiones: SesionesService) {
    this.usuario=new Usuario(null,"","","",null,"","","","","","")
  }


  editarPerfil(nombre: string, apellidos: string, fechaNacimiento: string, telefono:any, localidad:string,  direccion:string, imagen:string, descripcion:string){
    this.id= this.apiService.idUsuario; 
    let user = new Usuario(this.sesiones.id_usuario, nombre, apellidos, fechaNacimiento, telefono, "", "",localidad,  direccion, imagen, descripcion)
    for(let propiedad in user){

        if(user[propiedad]==""){
          user[propiedad]=null
        }
    }   


    this.apiService.putAdoptante(user)
    .subscribe((data:string) =>{
      console.log(data);
      if(data=="1"){

        alert("se ha modificado correctamente");
        console.log(data);
        console.log("aaaaaass")
      }
      else{
        alert("No se puede modificar")
      
        }

      console.log(data);
    })
}

  
  // onSubmit(form: NgForm){
  // console.log(form.value);
  // console.log(this.usuario);
  // console.log(this.sesiones.id_usuario)

  // this.apiService.putAdoptante(this.usuario)
  // .subscribe((data: string) => {
  //   console.log(data);
  //   if (data != "-1")
  //       alert("Se ha modificado el usuario con id: " + data)
  //     else
  //       alert("Error al modificar el usuario");
    
  // })
  
  // this.apiService.getAdoptantes().subscribe((data:string) =>{
  //   console.log(data)
  // })

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
//  }
    
 

  ngOnInit(): void {
  }

}

