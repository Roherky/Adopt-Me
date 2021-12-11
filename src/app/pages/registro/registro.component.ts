import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Protectora } from 'src/app/models/protectora';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public esProtectora: boolean;
  public usuario: Usuario;
  public protectora: Protectora;

  constructor(private servicioAdoptante: UsuarioService) {

    this.esProtectora = false;
    this.usuario = new Usuario(0, "", "", "", 0, "", "", "", "", "","");
    this.protectora = new Protectora(0,"", "", "", "", "", "","","");
  }

  usuarioAdoptante(){
    this.esProtectora = false;
  }

  usuarioProtectora(){
    this.esProtectora = true;
  }

  onSubmit(form: NgForm){
    this.servicioAdoptante.postAdoptante(this.usuario).subscribe((data: any) => {
      console.log(data);
      if(data != "-1") console.log("Se ha creado el usuario con ID: " + data + " satisfactoriamente");
      else console.log("Ha ocurrido un error al procesar su solicitud");
    })
  }

  ngOnInit(): void {
  }

}
