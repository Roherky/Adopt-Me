import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';


@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

 
  public usuario: Usuario;
  

  constructor( private apiService: UsuarioService) {
    
    
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

  }

    
 

  ngOnInit(): void {
  }

}
